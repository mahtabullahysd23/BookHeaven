import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput/FormInput";
import PasswordInput from "../../atoms/PasswordInput/PasswordInput";
import Button from "../../atoms/Buttons/Button";
import customAxios from "../../../Utils/customAxios";
const SignupFormMolecules = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const modifiedData = {
      ...data,  
      country: "Bangladesh"
    };
   
    customAxios
      .post("/auth/signup", modifiedData)
      .then((res) => {
        alert(res.data.message);
        navigate("/signin");
        reset();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        labelText="Name"
        type="text"
        name="name"
        control={control}
        errors={errors}
        rules={{
          required: "Name is required",
          maxLength: {
            value: 20,
            message: "Name should be less than 20 characters",
          },
        }}
      />

      <FormInput
        labelText="Address"
        type="text"
        name="address"
        control={control}
        errors={errors}
        rules={{
          required: "Address is required",
          maxLength: {
            value: 20,
            message: "Address should be less than 20 characters",
          },
        }}
      />

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

      <PasswordInput control={control} errors={errors} />
      <PasswordInput
        control={control}
        errors={errors}
        text="Confirm password"
        watch={watch}
      />

      <Button type="submit" text="Sign Up" />
    </form>
  );
};

export default SignupFormMolecules;
