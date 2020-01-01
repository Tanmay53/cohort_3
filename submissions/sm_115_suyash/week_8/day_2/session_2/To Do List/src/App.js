import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input/input";
import ShowList from "./Components/ShowList/showList";
import Btn from "./Components/Button/button";

class App extends Component {
  state = {
    dataArr: [],
    data: "",
    dataShow: [],
    completedTask: [],
    showCompleteTask: []
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

  show = i => {
    this.state.completedTask.push(this.state.dataShow[i]);
    this.state.dataArr.splice(i, 1);

    console.log("hekki", this.state.completedTask);
    this.setState({
      dataShow: this.state.dataArr
    });
  };

  ShowCompletedTask = () => {
    this.setState({ showCompleteTask: this.state.completedTask });
    // console.log(this.state.showCompleteTask);
  };

  render() {
    let showCompleteTask = null;
    console.log(this.state.showCompleteTask);
    if (this.state.showCompleteTask.length > 0) {
      showCompleteTask = this.state.showCompleteTask.map((val, i) => {
        console.log("i", i);
        return (
          <p>
            <strike>
              {i + 1}. {val}
            </strike>
          </p>
        );
      });
    }

    return (
      <div className="App">
        <Input changed={e => this.storeListHandler(e)} />
        <Btn clicked={this.showHandler} />
        <div className="taskListDiv">
          <h2>Task List</h2>
          {this.state.dataShow.map((val, i) => {
            return (
              <ShowList click={() => this.show(i)} num={i + 1} item={val} />
            );
          })}
        </div>
        <button onClick={this.ShowCompletedTask}>Completed Task</button>
        <p>{showCompleteTask}</p>
      </div>
    );
  }
}

export default App;
