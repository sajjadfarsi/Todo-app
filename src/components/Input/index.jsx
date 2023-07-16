// 1. Using forwardRef function for handling ref comming from parents
// 2. Using rest operator for handling props in component
import { forwardRef, useContext } from "react";
//styles
import "./Styles.css";
//
import { TodoContext } from "../context";

const Input = forwardRef(function TextField(props, ref) {
  const { ...otherProps } = props;
  const { value, setValue } = useContext(TodoContext);
  return (
    <input
      {...otherProps}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      ref={ref}
    />
  );
});
export default Input;
