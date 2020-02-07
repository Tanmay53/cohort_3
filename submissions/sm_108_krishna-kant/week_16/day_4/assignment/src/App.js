import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./App.css";
import { PageHeader } from "antd";
import Routes from "./Routes/Routes";
function App() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        onBack={
          location.pathname === "/"
            ? null
            : () => {
                history.push("/");
              }
        }
        title="Address Book"
        subTitle="Flask and React based CRUD"
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
