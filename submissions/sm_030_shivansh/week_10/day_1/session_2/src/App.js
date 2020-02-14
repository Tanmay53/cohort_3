import React from 'react';
import Todo from './component/Todo/Todo';
import Add from './component/Todo/Add';
import CompletedTodo from './component/Todo/CompletedTodo';
import { showCompleted } from "./component/redux/action";
import store from "./component/redux/store"
import './App.css';

//Developer mode
const verbose = 0;

const App = () => {


  return (
    <div className="App m-5">

      <h1><i className="fas fa-clipboard-list"></i> Todo App</h1>

      <Add />

      <Todo
        data={store.getState().todo}
        label="TODO" />

      <button onClick={() => store.dispatch(showCompleted())}>
        Show Completed Todo
        </button>
      {/* conditional rendering */}
      {store.getState().showCompleted &&
        <Todo
          data={store.getState().todo.filter(ele => ele.isDone)}
          label="COMPLETED"
        />}
      {/* <CompletedTodo /> */}
    </div>
  );
}



export default App;
