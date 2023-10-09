import React from "react";
import "./CartItemMolecule.style.scss";
import Quantity from "../../atoms/Quantity/Quantity";
import CrossButton from "../../atoms/CrossButton/CrossButton";

const handleOnChange = (value) => {
  console.log(value);
};

const CartItemMolecule = ( {product_name,imgUrl,price}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="cart-item-details">
        <div>
          <p>{product_name}</p>
          <div className="cart-item-quantity-price">
            <Quantity
              initialValue={1}
              min={1}
              max={100}
              onChange={handleOnChange}
            />
            <h3>{price}</h3>
          </div>
        </div>
        <div>
          <CrossButton />
        </div>
      </div>
    </div>
  );
};

export default CartItemMolecule;
