// Desc: Button component
import "./Button.style.scss";
const Button = ({ type, text, onClick, className }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      {type != "submit" ? (
        <button className={`${className} button-base `} onClick={handleClick}>
          {text}
        </button>
      ) : (
        <div className="input-group">
          <button className="button-base" type="submit">{text}</button>
        </div>
      )}
    </>
  );
};
export default Button;
