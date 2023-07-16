//components
import { useContext } from "react";
import Button from "../Button";
//styles
import "./Styles.css";
import { TodoContext } from "../context";

const TodoItem = ({ todo: { value, id } }) => {
  const { handleRemoveItem } = useContext(TodoContext);
  return (
    <li className="todo-item">
      <span>{value}</span>
      <Button onClick={() => handleRemoveItem(id)} className="remove-todo">
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
