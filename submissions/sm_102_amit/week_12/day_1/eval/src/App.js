import React from "react";
import Routes from "./routes/Routes";
import Menubar from "./components/common/Menubar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Menubar />
      <Routes />
    </React.Fragment>
  );
}

export default App;
