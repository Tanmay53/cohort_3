import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
