/* eslint-disable no-useless-constructor */
import React from 'react';
import AddTodo from './components/addTodo';
import PendingTodo from './components/pendingTodo';
import CompletedTodo from './components/completedTodo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      currentTodo : '',
      completedTodos: [],
      clicked: false
    };
  }

  handleTodoChange = (name) => {
    this.setState({
      currentTodo: name
    });
  }

  appendTodo = () => {
    let todos = this.state.todoList;
    todos.push(this.state.currentTodo);
    this.setState({
      currentTodo: '',
      todoList: todos,
      clicked: false
    });
  }

  deleteTodo = (idx) => {
    console.log(idx);
    let newTl = this.state.todoList.filter((e,i) => {
      return i !== Number(idx);
    });
    console.log(newTl);
    this.setState({
      todoList: newTl
    });
  }

  todoComplete = (idx) => {
    let completeTodo = this.state.todoList.filter((e,i) => {
      return i === idx;
    });
    let compTds = this.state.completedTodos;
    compTds.push(completeTodo[0]);
    this.setState({
      completeTodos: compTds
    });
    this.deleteTodo(idx);
  }

  showCompleted = () => {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className = "container">
        <AddTodo todoName = {this.state.currentTodo} handleTodoChange = {this.handleTodoChange} onPressAdd = {this.appendTodo} />
        {this.state.todoList.map((e, i) => {
          return <PendingTodo name = {e} key = {e+i} idx = {i} onPressDelete = {this.deleteTodo} todoCompleteCheck = {this.todoComplete} />
        })}
        <div className = "row justify-content-around mt-3">
          <button className = "btn btn-outline-success" onClick = {this.showCompleted}>Show Completed Todos</button>
        </div>
        <ul className = "list-group mt-3">
        {this.state.clicked && this.state.completedTodos.map((e,i) => {
          return <CompletedTodo name = {e} key = {e+i}/>
        })}
        </ul>
      </div>
    )
  }
}


export default App;
