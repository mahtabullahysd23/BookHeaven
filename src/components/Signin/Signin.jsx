import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "./Signin.style.scss";
import Checkbox from "../Checkbox/Checkbox";
import Features from "../Features/Features";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const { handleSubmit, control, formState: { errors } ,reset } = useForm(
    {
      mode: "onChange",
    }
  );
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e) => {
    propagate(e);
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    navigate("/home");
    alert("You have successfully logged in");
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="container-main">
        <div className="left-div">
          <div className="content">
            <div className="rounded-square"></div>
          </div>
        </div>
        <div className="right-div">
          <div className="content">
            <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              Welcome Back
            </h2>
            <p style={{ textAlign: "center", marginBottom: "3rem" }}>
              Please Login in to Your Account
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
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
                        id="email"
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
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <>
                      <div className="pass-field">
                        <input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                        />
                        <div
                          onClick={toggleShowPassword(e)}
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
              <div className="input-group">
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Signin;
