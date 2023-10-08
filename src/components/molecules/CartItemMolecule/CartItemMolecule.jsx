import React from "react";
import "./CartItemMolecule.style.scss";
import Quantity from "../../atoms/Quantity/Quantity";
import CrossButton from "../../atoms/CrossButton/CrossButton";

const handleOnChange = (value) => {
  console.log(value);
};

const CartItemMolecule = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src="04.jpg" alt="product" />
      </div>
      <div className="cart-item-details">
        <div>
          <p>Product Name</p>
          <div className="cart-item-quantity-price">
            <Quantity
              initialValue={1}
              min={1}
              max={10}
              onChange={handleOnChange}
            />
            <h3>$400</h3>
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
