import React from "react";
import ListItem from "./components/ListItem";
import store from "./redux/store";
import { addTask } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: "",
      comspleted: "",
      data: []
    };
  }

  handleClick = () => {
    // console.log("Dispatching action => addTask");

    if (this.state.currentTask !== "") {
      store.dispatch(addTask(this.state.currentTask, false));

      // console.log("Store updated to=>", store.getState());

      this.setState({
        currentTask: "",
        completed: false
      });
    }
  };

  handleChange = event => {
    let currentTask = event.target.value;
    // console.log(currentTask);

    this.setState({
      currentTask: currentTask,
      completed: false
    });
  };

  componentDidMount() {
    this.setState({
      data: store.getState()
    });
    this.unsubscribe = store.subscribe(this.handleStoreUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStoreUpdate = () => {
    this.setState({
      data: store.getState()
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="input-group col-8 mx-auto">
          <input
            className="form-control border border-dark rounded-0"
            placeholder="Enter task"
            value={this.state.currentTask}
            onChange={this.handleChange}
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-dark rounded-0 font-weight-bold"
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-5">
          <ol>
            {this.state.data.map((task, index) => {
              return (
                <ListItem
                  task={task.currentTask}
                  completed={task.completed}
                  index={index}
                  key={task + index}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
