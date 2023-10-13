import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput/FormInput";
import PasswordInput from "../../atoms/PasswordInput/PasswordInput";
import Button from "../../atoms/Buttons/Button";
import customAxios from "../../../Utils/customAxios";
import { useState } from "react";
import LinearLoader from "../../atoms/LinearLoader/LinearLoader";
import { toast } from "react-toastify";
const SignupFormMolecules = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const modifiedData = {
      ...data,
      country: "Bangladesh", //it will be tracked from ip later
    };

    customAxios
      .post("/auth/signup", modifiedData)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
        navigate("/signin");
        reset();
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 409) {
          toast.error("Email already exists");
        } else {
          toast.error(err.response.data.error[0].msg);
        }
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
      {loading ? (
        <Button type="submit" disabled={true} text={<LinearLoader />} />
      ) : (
        <Button type="submit" text="Sign Up" />
      )}
    </form>
  );
};

export default SignupFormMolecules;
