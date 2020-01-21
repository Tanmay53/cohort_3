import React, { Component } from 'react';
import Add from './components/Add'
import Todo from './components/Todo'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo : [],
      isCompleted : false
    }
  }

  handleAdd = (itemName) => {
    var item = {
      name : itemName,
      isDone : false
    }
    this.setState({
      todo : [...this.state.todo, item]
    })
  }

  toggleDone = (name) => {
    this.setState({
      todo : this.state.todo.map((item, i)=> item.name === name?{...item,isDone:!item.isDone}:item)
    })
  }

  handleDel = (name) => {
    this.setState({
      todo : this.state.todo.filter((item, i)=> item.name!== name)
    })
  }

  render() {
    console.log(this.state.todo)
    return ( 
      <div className="App">
        <Add add = {this.handleAdd}/>
        <Todo data = {this.state.todo}
              toggleDone = {this.toggleDone}
              label = "TODO"
              del = {this.handleDel} />
        <button onClick = {() => this.setState({isCompleted:!this.state.isCompleted})}>
          SHOW COMPLETED TODO
        </button>
        {this.state.isCompleted && <Todo data = {this.state.todo.filter(a => a.isDone)}
              toggleDone = {this.toggleDone}
              label = "COMPLETED"
              del = {this.handleDel} />}
      </div>
    )
  }
}