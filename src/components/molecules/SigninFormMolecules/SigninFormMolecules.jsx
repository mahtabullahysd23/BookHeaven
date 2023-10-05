import "./SigninFormMolecules.style.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Buttons/Button";
import PasswordInput from "../../atoms/PasswordInput/PasswordInput";

const SigninFormMolecules = () => {
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
    navigate("/home");
    alert("You have successfully logged in");
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        labelText="Email"
        type="email"
        name="email"
        control={control}
        errors={errors}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <PasswordInput control={control} errors={errors}/>
      <div className="input-group-checkbox">
        <div>
          <Checkbox />
        </div>
        <div>
          <Link to="/">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
      <Button type="submit" text="Login" />
    </form>
  );
};

export default SigninFormMolecules;
