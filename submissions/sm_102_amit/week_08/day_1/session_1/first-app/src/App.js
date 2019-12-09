import React from "react";
import List from "./component/List";
import Join from "./component/Join";
import Setting from "./component/Setting";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Search from "./component/Search";
import Help from "./component/Help";
import Home from "./component/Home";
import Download from "./component/Download";
import Ui from "./component/Ui";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <List />
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-6 py-2">
                <Join />
              </div>
              <div class="col-6 py-2">
                <Setting />
              </div>
              <div class="col-6 py-2">
                <Login />
              </div>
              <div class="col-6 py-2">
                <Contact />
              </div>

              <div class="col-6 py-2">
                <Search />
              </div>
              <div class="col-6 py-2">
                <Help />
              </div>
              <div class="col-6 py-2">
                <Home />
              </div>
              <div class="col-6 py-2">
                <Download />
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <Ui />
        </div>
      </div>
    </div>
  );
}

export default App;
