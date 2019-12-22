import React from 'react';
import Task from './task';
import CompletedTask from './completed';
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
      <div className='todoCard'>
        <div className='addTask'>
          <input
            type='text'
            placeholder='Add a to-do,,,'
            id='add'
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          <button
            onClick={() => {
              this.onItemAdd(this.state.inputValue);
            }}
          >
            Add
          </button>
        </div>
        <div className='task'>
          {this.state.taskItem.map(task => {
            return (
              <Task key={globalCounter++} task={task} toggle={this.markTask} />
            );
          })}
        </div>
        <p className='cp' style={{ display: this.state.completedState }}>
          Completed Task
        </p>
        <div className='completedTask'>
          {this.state.completedItem.map(task => {
            return <CompletedTask task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
