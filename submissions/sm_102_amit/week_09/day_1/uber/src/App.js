import React from "react";
import "./App.css";
import Content from "./component/Content";

function App() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a class="navbar-brand" href="#">
            Uber
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Company
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Safety
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Content />
    </div>
  );
}

export default App;
