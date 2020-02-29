import React from 'react'
// import ReactDOM from 'react-dom'
import AddItem from './components/AddItem'
import CompletedList from './components/CompletedList'
import ToDoList from './components/ToDoList'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoList: [],
            showCompletedItems: false
        }
    }
    addNewTodoItem = (name) => {
        let flag= 0
        this.state.toDoList.map(each => { if (each.itemName === name) flag = 1 })
        if (flag == 1) {
            alert("Task is already Existed..!")
        }
        else {
            let newItem = {
                itemName: name,
                checkBoxCheck: false
            }
            console.log(newItem)
            this.setState({
                toDoList: [...this.state.toDoList, newItem]
            })
            console.log(this.state)
        }
    }
    removeToDoListItem = (name) => {
        let filteredList = this.state.toDoList.filter(each => {
            if (each.itemName !== name) return each
        })
        console.log(filteredList)
        this.setState({
            toDoList: filteredList
        })
    }
    checkBoxChecked = (name) => {
        this.setState({
            toDoList: this.state.toDoList.map(each => each.itemName === name ?
                { ...each, checkBoxCheck: !each.checkBoxCheck } : each)
        })
    }
    completedListItems = () => {

    }
    render() {
        return (
            <div>
                <div className="d-flex flex-wrap">
                    <AddItem addItem={this.addNewTodoItem} />
                    <ToDoList itemsArr={this.state.toDoList}
                        removeItem={this.removeToDoListItem}
                        checkBoxChecked={this.checkBoxChecked} />
                </div>
                <button onClick={() => this.setState({ showCompletedItems: !this.state.showCompletedItems })}
                    className="bg-warning d-block m-2 ">
                    Show completed tasks
                </button>
                {this.state.showCompletedItems &&
                    <CompletedList itemsArr={this.state.toDoList.filter(each =>
                        each.checkBoxCheck === true)} />}
            </div>
        )
    }
}