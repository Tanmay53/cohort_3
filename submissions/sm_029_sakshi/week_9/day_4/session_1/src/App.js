import React, { Component } from "react";
import Add from "./component/Add";
import Todo from "./component/Todo";
import CompletedTodo from "./component/CompletedTodo";
import {Box, Container,Button} from '@material-ui/core'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoarr: [],
      isshowcompleted: false
    };
  }

  // ===========Adding the todo items=======================
  handleAdd = itemName => {
    let itemobj = {
      name: itemName,
      isDone: false,
      id: Date.now()
    };
    this.setState({
      todoarr: [...this.state.todoarr, itemobj]
    });
  };

  // ==============just to show in console=================
  show = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // ======================taskdone ==============
  taskDone = id => {
    this.setState({
      todoarr: this.state.todoarr.map(item =>
        id === item.id ? { ...item, isDone: true } : item
      )
    });
  };

  // =============show completed todo===============
  handleShowcompletedtodo = e => {
    e.preventDefault();
    this.setState({
      isshowcompleted: !this.state.isshowcompleted
    });
  };

  // ====================delete function ==filter the id which do not match================
  handledelete = id => {
    this.setState({
      todoarr: this.state.todoarr.filter(item => item.id !== id)
    });
  };

  render() {
    return (
  <Box className="col-8 border border-dark">
<Container className="col-5">
<button onClick={this.show}>show</button>
        <Add add={this.handleAdd} />
        <Todo
          data={this.state.todoarr}
          taskDone={this.taskDone}
          label={"TODO TASKS"}
          delete={this.handledelete}
        />
           <Button
          onClick={this.handleShowcompletedtodo}
         
          variant="contained"
          color="primary"
        > Showcompletedtodo</Button>
     

        {/* ========conditional rendering is used when button is clicked and and become true thyen nly the completed task will be seen */}
        {this.state.isshowcompleted && (
          <CompletedTodo
            data={this.state.todoarr.filter(item => item.isDone)}
            taskDone={this.taskDone}
            label={"COMPLETED TASKS"}
          />
        )}
</Container>



  </Box>
    
    );
  }
}
