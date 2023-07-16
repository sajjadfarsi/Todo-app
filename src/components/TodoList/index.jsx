//modules
import { useContext } from "react";
//components
import TodoItem from "../TodoItem";
//styles
import "./Styles.css";
//
import { TodoContext } from "../context";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="list-wrapper">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
export default TodoList;
