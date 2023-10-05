import Features from "../../organisms/FeaturesBannerOrganism/FeaturesBanner";
import SignupOrganism from "../../organisms/SignupOrganism/SignupOrganism";
import "./Signup.style.scss";
const Signup = () => {
  return (
    <>
      <div className="container-main">
        <SignupOrganism />
      </div>
      <Features />
    </>
  );
};

export default Signup;
