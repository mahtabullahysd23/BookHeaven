// Desc: Button component
import "./Button.style.scss";
const Button = ({ type, text, onClick, className }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      {type != "submit" ? (
        <button className={className} onClick={handleClick}>
          {text}
        </button>
      ) : (
        <div className="input-group">
          <button type="submit">{text}</button>
        </div>
      )}
    </>
  );
};
export default Button;
