//styles
import "./Style.css";
const Button = ({ disabled, name, onClick, className, children }) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
