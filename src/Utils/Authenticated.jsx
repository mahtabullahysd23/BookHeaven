import { Navigate, Outlet } from "react-router-dom";

const Authenticated = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <div>
      <Outlet />{" "}
    </div>
  ) : (
    <>
      <Navigate to="/signin" />
    </>
  );
};

export default Authenticated;
