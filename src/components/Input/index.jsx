//styles
import "./Styles.css";
const Input = ({ onChange, value, inputRef }) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      ref={inputRef}
    />
  );
};
export default Input;
