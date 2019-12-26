import React, {Component} from 'react';
import Add from './components/Add';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      showCompleted: false
    }
  }
  // Handeling add event
  handleAdd = (itemName) => {
    var item = {
      name: itemName,
      isDone: false
    }
    this.setState({
      todo: [...this.state.todo, item],
      name: ''
    })
  }
  // Toggle for checking if the task is done
  toggleDone = (index) => {
    this.setState({
      todo: this.state.todo.map((item, i) => i===index ? {...item, isDone:!item.isDone}: item)
    })
  }

  // Handeling delete event
  handleDel = (index) => {
    this.setState({
      todo: this.state.todo.filter((item, i) => i!==index)
    })
  }

  render(){
    return (
      <div className='col-12' style={{alignContent: 'center'}}>
        <h1 className='text-center col-6'>Todo App</h1>
        <Add add={this.handleAdd} />
        <Todo data={this.state.todo} 
              toggleDone={this.toggleDone} 
              del={this.handleDel}
              className=''
              />
        <button className='badge badge-pill badge-success' onClick={()=> this.setState({showCompleted: !this.state.showCompleted})}>
          SHOW COMPLETED TO-DOS
        </button>
        {this.state.showCompleted && 
        <Todo data={this.state.todo.filter(e=>e.isDone)} 
              toggleDone={this.toggleDone} 
              label='Completed todos'
              del={this.handleDel}
               /> 
        }
      </div>
    )
  }
}

export default App;
