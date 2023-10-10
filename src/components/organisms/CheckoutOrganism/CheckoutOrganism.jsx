import React from "react";
import "./CheckoutOrganism.style.scss";
import CheckoutFormMolecule from "../../molecules/CheckoutFormMolecule/CheckoutFormMolecule";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CheckoutItemMolecule from "../../molecules/CheckoutItemMolecule/CheckoutItemMolecule";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Buttons/Button";
import { useEffect } from "react";
import { useState } from "react";
import customAxios from "../../../Utils/customAxios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumberOfItems, addToCart } from "../../../Store/Slices/cartSlice";

const CheckoutOrganism = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [books, setBooks] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(1000);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    customAxios
      .post("/transaction/checkout", data)
      .then((res) => {
        alert("Order Placed Successfully");
        navigate("/books");
        reset();
        dispatch(
          addToCart({
            cart_total: 0,
          })
        );
        dispatch(addNumberOfItems(0));
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const booksinCart = useSelector((state) => state.cart.cart.cart_total);
  useEffect(() => {
    customAxios
      .get("/cart/view")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        setBooks([]);
      });
  }, [booksinCart]);

  return (
    <form className="checkout-form " onSubmit={handleSubmit(onSubmit)}>
      <div className="chekout-left-div w-100">
        <h3>Billing Details</h3>
        <CheckoutFormMolecule control={control} errors={errors} />
      </div>
      <div className="checkout-right-div w-100">
        <h3>Your Order</h3>
        <div className="checkout-items">
          {books.books ? (
            books.books.map((book) => (
              <CheckoutItemMolecule
                key={book.book._id}
                imageUrl={book.book.imageUrl}
                product_name={book.book.name}
                Item_price={book.Item_total}
                quantity={book.quantity}
              />
            ))
          ) : (
            <div className="flex-center pt-2 ">
              <h3>No items for checkout</h3>
            </div>
          )}
          <div className="checkout-total flex-between mt-1">
            <h3>Subtotal</h3>
            <h3>${books.cart_total ? books.cart_total : 0}</h3>
          </div>
          <div className="mt-2 pay-option">
            <input className="mb-1" defaultChecked type="radio" />{" "}
            <span>Transfer From Wallet</span>
            <p className="flex-between">
              Current balance:{" "}
              <span>${currentBalance ? currentBalance : 0}</span>
            </p>
            <p className="flex-between">
              Cost : <span>${books.cart_total ? books.cart_total : 0}</span>
            </p>
            <p className="flex-between">
              Remaining balance:{" "}
              <span>
                $
                {currentBalance - books.cart_total
                  ? currentBalance - books.cart_total
                  : 0}
              </span>
            </p>
          </div>
          <p className="policy">
            your personal information will be used to process your order,
            support your experience throughout this website, and for other
            purposes described in our <span>privacy policy.</span>
          </p>
          <div className="mt-1">
            <Checkbox
              text=" I have read and agree to the website terms
          and conditions *"
              display="block"
              checked="false"
            />
          </div>
          <Button text="Place Order" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default CheckoutOrganism;
