import React from "react";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="py-5">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
