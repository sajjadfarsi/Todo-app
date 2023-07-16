//styles
import "./Style.css";
const Button = ({ disabled = false, onClick, className, children }) => {
  return (
    <button
      disabled={disabled}
      className={`${className} ${disabled && "disable-button"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
