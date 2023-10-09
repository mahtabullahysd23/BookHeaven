import React, { useEffect } from "react";
import "./CartItemOrganism.style.scss";
import CartItemMolecule from "../../molecules/CartItemMolecule/CartItemMolecule";
import Button from "../../atoms/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Store/Slices/modalSlice";
import customAxios from "../../../Utils/customAxios";
import { useState } from "react";

const CartItemOrganism = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    customAxios.get("/cart/view").then((res) => {
      setBooks(res.data.data.books);
      console.log(res.data.data);
    }).catch((err) => {
      setBooks([]);
    });
  }, []);

  return (
    <div className="cart-side-modal">
      <div className="cart-side-modal-header">
        <h3>Cart</h3>
      </div>
      <div className="flex-column-between h-75 gap-3 ">
        <div className="w-100">
          <div className="Item-list">
            {books&&books.map((book,index) => (
              <CartItemMolecule
                key={index}
                product_name="dsdfsdf"
                
                price="sdfsdf"
              />
            ))}
          </div>
          <div className="flex-between mt-1 ">
            <h3>Subtotal:</h3>
            <h3>$56235</h3>
          </div>
        </div>
        <div className="w-100">
          <div className="cart-button-group mb-1">
            <Button
              className="black-button w-100 mt-1"
              text="Checkout"
              onClick={() => {
                navigate("/checkout");
                dispatch(closeModal('cartModal'));
              }}
            />
            <Button
              className="ash-button w-100 mt-1"
              text="Continue Shopping"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemOrganism;
