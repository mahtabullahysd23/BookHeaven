import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Features from "../Features/Features";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./Signup.style.scss";

const Signup = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    navigate("/signin");
    alert("You have successfully registered");
    reset();
    console.log(data);
  };

  return (
    <>
      <div className="container-main">
        <div className="right-div">
          <div className="content-left">
            <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              Register Now
            </h2>
            <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              Register to get access to all the features
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Name is required",
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your name"
                      />
                      <span className="error">*{errors.name?.message}</span>
                    </>
                  )}
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Address is required",
                    maxLength: {
                      value: 20,
                      message: "Address should be less than 20 characters",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your address"
                      />
                      <span className="error">*{errors.address?.message}</span>
                    </>
                  )}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                      />
                      <span className="error">*{errors.email?.message}</span>
                    </>
                  )}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    maxLength: {
                      value: 32,
                      message: "Password should be less than 32 characters",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <div className="pass-field">
                        <input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                        />
                        <div
                          onClick={toggleShowPassword}
                          className="show-password-button"
                        >
                          {showPassword ? <BiHide /> : <BiShowAlt />}
                        </div>
                      </div>
                      <span className="error">*{errors.password?.message}</span>
                    </>
                  )}
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Confirm Password is required",
                    maxLength: {
                      value: 32,
                      message: "Password should be less than 32 characters",
                    },
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <>
                      <div className="pass-field">
                        <input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                        />
                        <div
                          onClick={toggleShowConfirmPassword}
                          className="show-password-button"
                        >
                          {showConfirmPassword ? <BiHide /> : <BiShowAlt />}
                        </div>
                      </div>
                      <span className="error">
                        *{errors.confirmPassword?.message}
                      </span>
                    </>
                  )}
                />
              </div>
              <div className="input-group">
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
        <div className="left-div">
          <div className="content">
            <div className="img-big">
            </div>
            <div className="rounded-square-right"></div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Signup;
