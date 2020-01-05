import React, { Component } from 'react'
import Add from './components/Add'
import Todo from './components/Todo'
import Completed from './components/Completed'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      showCompleted: false,
    }
  }

  handleAdd = (itemName) => {
    var item = {
      name: itemName,
      isDone: false,
    }
    this.setState({
      todo: [...this.state.todo, item]
    })

  }

  checkItem = (index) => {
    console.log('check')
    this.setState({
      todo: this.state.todo.map((item, i) => i === index ? { ...item, isDone: !item.isDone } : item)
    })
  }

  handelDelete = (data) => {
    console.log(this.state.todo)
    let new_todo = this.state.todo.filter((item, index) => {
      return index !== data
    })
    this.setState({
      todo: new_todo
    })

  }

  render() {
    return (
      <div className="d-flex justify-content-center" >
        <div className="card shadow-lg col-7 m-5">
          <Add add={this.handleAdd} />
          <Todo data={this.state.todo} del={this.handelDelete} check={this.checkItem} />
          <button onClick={() => this.setState({ showCompleted: !this.state.showCompleted })}
            className="btn btn-success m-5 p-2">Show Completed Task</button>
            {this.state.showCompleted && <Completed data={this.state.todo} del={this.handelDelete} />}
        </div>
      </div>
    )
  }
}