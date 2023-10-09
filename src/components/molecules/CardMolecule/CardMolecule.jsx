import DisplayRating from "../../atoms/DisplayRating/DisplayRating";
import Tag from "../../atoms/Tag/Tag";
import "./CardMolecule.style.scss";
import { FaEye } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { openModal } from "../../../Store/Slices/modalSlice";
import { addToCart } from "../../../Store/Slices/cartSlice";
import customAxios from "../../../Utils/customAxios";
import { addSingleBook } from "../../../Store/Slices/bookSlice";


const CardMolecule = ({
  id,
  name,
  price,
  rating,
  discount,
  tag,
  imgUrl,
}) => {

  const dispatch = useDispatch();

  const handleClickAddtoCart = () => {
    customAxios
      .post("/cart/add", {
        book: id,
        quantity: 1,
      })
      .then((res) => {
        dispatch(addToCart(res.data.data));
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const handleClickQuickView = () => {
    customAxios.get(`/books/${id}`).then((res) => {
      dispatch(addSingleBook(res.data.data));
    });
    dispatch(openModal("eyeModal"));
  };


  return (
    <>
      <div className="card">
        <div className="icon-button-group">
          <div className="icon-button" onClick={handleClickQuickView}>
            <FaEye />
          </div>
          <div className="icon-button">
            <RiHeart2Fill />
          </div>
          <div className="icon-button" onClick={handleClickAddtoCart}>
            <BsFillCartPlusFill />
          </div>
        </div>
        <div className="header-card">
          <Tag text={discount} color="black" />
          <Tag text={tag} color="green" />
        </div>
        <img
          style={{ height: "auto" }}
          src={imgUrl ? imgUrl : "https://picsum.photos/200/300"}
          alt={name}
        />
        <div className="card-div">
          <h3>{name}</h3>
          <div className="rating-card-view">
            <DisplayRating />
          </div>
          <p>{price}</p>
        </div>
      </div>
      
    </>
  );
};

export default CardMolecule;
