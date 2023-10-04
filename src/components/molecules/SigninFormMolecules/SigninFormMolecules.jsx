import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Buttons/Button";
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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        <Button type="submit" text="Login"/>
      </div>

    </form>
  );
};

export default SigninFormMolecules;
