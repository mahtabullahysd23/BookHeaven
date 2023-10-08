import React from "react";
import "./CheckoutOrganism.style.scss";
import CheckoutFormMolecule from "../../molecules/CheckoutFormMolecule/CheckoutFormMolecule";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CheckoutItemMolecule from "../../molecules/CheckoutItemMolecule/CheckoutItemMolecule";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Buttons/Button";

const CheckoutOrganism = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/signin");
    alert("Order Placed Successfully");
    reset();
    console.log(data);
  };
  return (
    <form className="checkout-form " onSubmit={handleSubmit(onSubmit)}>
      <div className="chekout-left-div w-100">
        <h3>Billing Details</h3>
        <CheckoutFormMolecule control={control} errors={errors} />
      </div>
      <div className="checkout-right-div w-100">
        <h3>Your Order</h3>
        <div className="checkout-items">
          <CheckoutItemMolecule />
          <CheckoutItemMolecule />
          <CheckoutItemMolecule />
          <div className="checkout-total flex-between mt-1">
            <h3>Subtotal</h3>
            <h3>$1000</h3>
          </div>
          <div className="mt-2 pay-option">
            <input className="mb-1" defaultChecked type="radio" />{" "}
            <span>Transfer From Wallet</span>
            <p className="flex-between">
              Current balance: <span>$1000</span>
            </p>
            <p className="flex-between">
              Cost : <span>$1000</span>
            </p>
            <p className="flex-between">
              Remaining balance: <span>$0</span>
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
          <Button text="Place Order" type="submit"/>
        </div>
      </div>
    </form>
  );
};

export default CheckoutOrganism;
