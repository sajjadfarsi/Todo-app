import { createContext, useState, useRef, useEffect } from "react";
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo = (value) => {
    const randomNumber = Date.now();
    const newTodo = { id: randomNumber, value };
    setValue("");
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleRemoveItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleClick = () => {
    addTodo(value);
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const values = {
    todos,
    value,
    setValue,
    inputRef,
    addTodo,
    handleRemoveItem,
    handleClick,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
