import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input/input";
import ShowList from "./Components/ShowList/showList";
import Btn from "./Components/Button/button";

class App extends Component {
  state = {
    dataArr: [],
    data: "",
    dataShow: []
  };

  storeListHandler = e => {
    let list = e.target.value;
    this.setState({
      data: list
    });
  };
  showHandler = () => {
    if (this.state.data !== "") {
      this.state.dataArr.push(this.state.data);
    }

    this.setState({
      dataShow: this.state.dataArr
    });
  };

  hello = () => {
    console.log("hekki");
  };

  render() {
    return (
      <div className="App">
        <Input changed={e => this.storeListHandler(e)} />
        <Btn clicked={this.showHandler} />
        <div className="taskListDiv">
          <h2>Task List</h2>
          {this.state.dataShow.map((val, i) => {
            return (
              <ShowList click={() => this.hello()} num={i + 1} item={val} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
