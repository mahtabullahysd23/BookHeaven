import FeaturesBanner from "../../organisms/FeaturesBannerOrganism/FeaturesBanner";
import SigninOrganism from "../../organisms/SigninOrganism/SigninOrganism";
import "./Signin.style.scss";
const Signin = () => {
  return (
    <>
      <div className="container-main">
        <SigninOrganism/> 
      </div>
      <FeaturesBanner />
    </>
  );
};

export default Signin;
