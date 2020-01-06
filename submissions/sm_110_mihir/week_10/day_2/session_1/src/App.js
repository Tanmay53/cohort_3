import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Completed from "./components/Completed";
function App() {
    return (
        <div className="card border-success w-50 m-auto">
            <TodoInput />
            <h3>Todo</h3>
            <TodoList />
            <Completed />
        </div>
    );
}

export default App;
