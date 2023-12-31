import SigninFormMolecules from "../../molecules/SigninFormMolecules/SigninFormMolecules";
import "./SigninOrganism.style.scss";
const SigninOrganism = () => {
  return (
    <>
      <div className="left-div">
        <div className="content">
          <div className="rounded-square"></div>
          <div className="img-div">
            <img src="../../../../public/Banner.png"></img>
          </div>
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
          <SigninFormMolecules />
        </div>
      </div>
    </>
  );
};

export default SigninOrganism;
