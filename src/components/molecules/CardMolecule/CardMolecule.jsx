import DisplayRating from "../../atoms/DisplayRating/DisplayRating";
import Tag from "../../atoms/Tag/Tag";
import "./CardMolecule.style.scss";
import { FaEye } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { openModal } from "../../../Store/Slices/modalSlice";

const CardMolecule = ({
  name,
  author,
  price,
  rating,
  discount,
  category,
  imgUrl,
}) => {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal("eyeModal"))
  }

  return (
    <div className="card">
      <div className="icon-button-group">
        <div onClick={handleClick} className="icon-button">
        <FaEye/>
        </div>
        <div className="icon-button">
          <RiHeart2Fill />
        </div>
        <div className="icon-button">
          <BsFillCartPlusFill />
        </div>
      </div>
      <div className="header-card">
        <Tag text={discount} color="black" />
        <Tag text={category} color="green" />
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
  );
};

export default CardMolecule;
