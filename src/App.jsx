//modules
import { useContext } from "react";
//components
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
// styles
import "./App.css";
//
import { TodoContext } from "./components/context";

function App() {
  const { todos, value, inputRef, handleClick } = useContext(TodoContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="action-wrapper">
          <Input ref={inputRef} />
          <Button
            disabled={!value}
            onClick={handleClick}
            className="add-todo-item"
          >
            Add Todo
          </Button>
        </div>
        <p>number of todos : {todos?.length}</p>
        {/* USING CONDITIONAL RENDERING */}
        {todos?.length ? <TodoList /> : <h1>You have no todo</h1>}
      </header>
    </div>
  );
}

export default App;
