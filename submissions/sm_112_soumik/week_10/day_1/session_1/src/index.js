import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Reducer from "./reducer";
import { incrementCount, decrementCount } from "./action";

const store = createStore(Reducer);
console.log(store.getState());

function App() {
  return (
    <div>
      <h2>Increment or decrement count</h2>
      <h1>Count : {store.getState().count}</h1>
      <button onClick={() => store.dispatch(incrementCount(2))}>
        Increment Count
      </button>
      <button onClick={() => store.dispatch(decrementCount(2))}>
        Decrement Count
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
const render = () => ReactDOM.render(<App />, rootElement);

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
