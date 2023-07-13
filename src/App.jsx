// modules
import { useState, useEffect, useRef } from "react";
//components
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
// styles
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodo = (value) => {
    const randomNumber = Date.now();
    const newTodo = { id: randomNumber, value };
    setValue("");
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const removeItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="add-todo">
          <Input
            onChange={(value) => {
              setValue(value);
            }}
            value={value}
            inputRef={inputRef}
          />
          <Button
            disabled={!value}
            onClick={() => addTodo(value)}
            className={"add-todo-item"}
          >
            Add Todo
          </Button>
        </div>
        <p>number of todos : {todos.length}</p>
        <TodoList todos={todos} removeItem={removeItem} />
      </header>
    </div>
  );
}

export default App;
