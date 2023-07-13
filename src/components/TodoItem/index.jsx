//components
import Button from "../Button";
//styles
import "./Styles.css";

const TodoItem = ({ todo, onClick }) => {
  return (
    <>
      <li className="todo-item">
        {todo.value}
        <Button
          disabled={false}
          onClick={() => onClick(todo.id)}
          className={"remove-todo"}
        >
          Delete
        </Button>
      </li>
    </>
  );
};

export default TodoItem;
