import React from 'react';
import Task from './task';
import CompletedTask from './completed';
import { Box, TextField } from '@material-ui/core';
let newTaskItem = [];
let globalCounter = 0;
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      taskItem: [],
      completedItem: [],
      inputValue: '',
      completedState: 'none'
    };
  }

  onInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  onItemAdd = item => {
    newTaskItem.push(item);
    this.setState({ taskItem: newTaskItem });
    this.setState({ inputValue: '' });
  };
  markTask = e => {
    if (e.target.checked) {
      let taskTarget = e.target.nextSibling.innerHTML;
      let taskPending = this.state.taskItem;
      let taskComplete = this.state.completedItem;

      taskPending.forEach((task, index) => {
        if (task === taskTarget) {
          taskPending.splice(index, 1);
        }
      });

      taskComplete.push(taskTarget);

      this.setState({
        taskItem: taskPending,
        completedItem: taskComplete,
        completedState: 'block'
      });

      console.log(this.state.completedItem, this.state.taskItem);
    }
  };
  render() {
    return (
      <Box className='todoCard'>
        <Box className='addTask'>
          <TextField
            value={this.state.inputValue}
            onChange={this.onInputChange}
            id='outlined-basic'
            label='Add a Task'
            variant='outlined'
          ></TextField>
          <button
            onClick={() => {
              this.onItemAdd(this.state.inputValue);
            }}
          >
            Add
          </button>
        </Box>
        <Box className='task'>
          {this.state.taskItem.map(task => {
            return (
              <Task key={globalCounter++} task={task} toggle={this.markTask} />
            );
          })}
        </Box>
        <p className='cp' style={{ display: this.state.completedState }}>
          Completed Task
        </p>
        <Box className='completedTask'>
          {this.state.completedItem.map(task => {
            return <CompletedTask task={task} />;
          })}
        </Box>
      </Box>
    );
  }
}

export default Todo;
