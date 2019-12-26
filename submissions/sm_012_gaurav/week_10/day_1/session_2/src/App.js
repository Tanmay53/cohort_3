import React from 'react';
import store from './redux/Store';
import {addItem} from './redux/Action';
import TodoItem from './TodoItem';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleClick = () => {
    store.dispatch(addItem({item: this.state.name, completed: false}));
    this.setState({
      name: ''
    });
  }

  render() {
    let todos = store.getState().todo;
    return (
      <div>
        <input type = "text" placeholder = "Enter Todo Name" value = {this.state.name} onChange = {this.handleChange}></input>
        <button onClick = {this.handleClick}>ADD TODO</button>
        <ul>
          {todos.map(e => <TodoItem todoItem = {e} key = {e.item} />)}
        </ul>
      </div>
    );
  }
}

export default App;

