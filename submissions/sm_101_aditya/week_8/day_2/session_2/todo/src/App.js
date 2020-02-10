import React from 'react';
import TodoDisplay from './components/Card';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo : [],
      completed: [],
      input : ""
    };
  }
  // inputs
  storeInput = e =>{
    this.setState({
      input: e.target.value
    });
  };

  // addItems
  addItem = () => {
    if(this.state.input.length > 0){
      this.setState({
        todo: [...this.state.todo, this.state.input]
      })
    }
  }

  // button
  markDone= item =>{
    const position = this.state.todo.indexOf(item);
    this.state.todo.splice(position, 1);
    this.setState({
      completed: [...this.state.completed, item]
    });
  }

  DeleteData = item => {
    const position = this.state.todo.indexOf(item);
    this.state.todo.splice(position, 1);
    this.setState({
        todo: [...this.state.todo]
    });
  };

  DeleteDone = item => {
    const position = this.state.completed.indexOf(item);
    this.state.completed.splice(position, 1);
    this.setState({
        completed: [...this.state.completed]
    });
  };

  render(){
    return(
      <div>
        <TodoDisplay
        Add = {this.addItem}
        todo = {this.state.todo}
        completed = {this.state.completed}
        input = {this.state.input}
        TextInput = {this.storeInput}
        TaskDone = {this.markDone}
        Delete={this.DeleteData}
        DeleteDone = {this.DeleteDone}
        />
      </div>
    )
  }
}

export default App;