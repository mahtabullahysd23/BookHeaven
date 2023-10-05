import "./Checkbox.style.scss";
const Checkbox = () => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    }}>
      <input type="checkbox" className="ui-checkbox"></input>
      <label className="ui-checkbox-label">Remember me</label>
    </div>
  );
};

export default Checkbox;
