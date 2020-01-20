import React, { Component } from 'react'
import CompletedTask from './CompletedTask'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoArr: [],
             completedTask: [],
             item:""
    
        }
    }
    
    changeTodo = (event) => {
        let todo = event.target.value
        this.setState({
            item: todo
        })
    }

    addTodo = () => {
        if(this.state.item !== "")
        {
            let list = [...this.state.todoArr, this.state.item]
        this.setState({
            todoArr: list
        })
        }
        else
        {
            alert("Enter a valid task")
        }
       // console.log(this.state.todoArr)
    }

    check = (i) => {
       let finishList = [...this.state.completedTask, this.state.todoArr[i]]
        this.state.todoArr.splice(i, 1);
        this.setState({
            todoArr: this.state.todoArr,
            completedTask: finishList
        })
    }

    render() {
        return (
            <div c1assName="container">
                <div className="row">
                    <div className="col-6">
                        <h1>TODO App</h1>
                        <input onChange={(event) => this.changeTodo(event)} value={this.state.todo} className="form-control" type="text" placeholder="+ Add a to-do..." />
                        <button onClick={this.addTodo} type="submit" className="btn btn-outline-primary">Add</button>
                        <ul className="text-left" style={{listStyle: "none"}}>
                            {
                                this.state.todoArr.map((ele, i) => {
                                   return <li key={ele} className="py-2 px-3 bg-light border"><input onClick={() => this.check(i)} className="mr-1" type="checkbox"/> {ele} <span className="ml-5 float-right">X</span></li>
                                })
                            }
                        </ul>
                        <h3> Task Completed</h3>
                        <CompletedTask completed = {this.state.completedTask} />
                    </div>
                </div>
            </div>
        )
    }
}
