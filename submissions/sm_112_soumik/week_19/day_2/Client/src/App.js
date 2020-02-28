import React from "react";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Navbar from "../src/Routes/Navbar";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
