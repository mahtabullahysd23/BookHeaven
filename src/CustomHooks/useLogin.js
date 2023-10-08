import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUser } from "../Store/Slices/userSlice";
import customAxios from "../Utils/customAxios";
const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    customAxios
      .post("/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
        alert("You have successfully logged in");
        dispatch(addUser(data));
        reset();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
  };
};

export default useLogin;
