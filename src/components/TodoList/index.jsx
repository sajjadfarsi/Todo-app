//components
import TodoItem from "../TodoItem";
//styles
import "./Styles.css";
const TodoList = ({ todos, removeItem }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onClick={removeItem} />;
      })}
    </ul>
  );
};
export default TodoList;
