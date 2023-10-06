import Tag from "../../atoms/Tag/Tag";
import "./CardMolecule.style.scss";
const CardMolecule = ({name,author,price,rating,discount,category,imgUrl}) => {
  return (
    <div className="card">
      <div className="header-card">
        <Tag text={discount} color="black" />
        <Tag text={category} color="green" />
      </div>
      <img
        style={{ height: "250px" }}
        src={imgUrl ? imgUrl : "https://picsum.photos/200/300"}
        alt={name}
      />
      <div className="card-div">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CardMolecule;
