import React from "react";
import "./SingleProductMolecule.style.scss";
import Tag from "../../atoms/Tag/Tag";
import DisplayRating from "../../atoms/DisplayRating/DisplayRating";
import Quantity from "../../atoms/Quantity/Quantity";
import Button from "../../atoms/Buttons/Button";
const SingleProductMolecule = () => {
  return (
    <div className="single-product-right">
      <Tag text="New" color="green" />
      <h2>Bamboo Toothbrush</h2>
      <div className="rating-single-product">
        <DisplayRating rating={4} />
        <p>4.7 Rating (5 customer Review) </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur
        ab, consectetur sint ipsam illum id, molestias deleniti odio omnis,
        quasi adipisci aliquam corrupti veniam? Ab a laborum obcaecati eius.
      </p>
      <div className="price-quantity">
        <div className="price-single-product">
          <p>Price :</p>
          <h2>$ 130</h2>
        </div>
        <div className="quantity-single-product">
          <p>Quantity :</p>
          <Quantity initialValue={1} min={1} max={10} />
        </div>
      </div>
      <div className="btn-group-single-prouct">
        <Button text="Add To Cart" className="black-button" />
        <Button text="Add To WishList" className="ash-button" />
      </div>

      <div className="product-info">
        <div className="single-info">
          <h5>ISBN:</h5>
          <p>123456789</p>
        </div>
        <div className="single-info">
          <h5>Author:</h5>
          <p>Paperback</p>
        </div>
        <div className="single-info">
          <h5>Publisher:</h5>
          <p>ABC Publisher</p>
        </div>
        <div className="single-info">
          <h5>Language:</h5>
          <p>English</p>
        </div>
        <div className="single-info">
          <h5>Pages:</h5>
          <p>200</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMolecule;
