import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}
export default App;
