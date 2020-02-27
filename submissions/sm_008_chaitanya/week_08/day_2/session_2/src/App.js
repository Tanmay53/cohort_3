import React, { Component } from 'react'
import Add from './components/Add'
import Todo from './components/Todo'
import CompletedTodo from './components/CompletedTodo'
import styles from './components/Styles.css'

export class App extends Component {
    constructor(props){
        super(props)
        this.state={
            todo:[],
            showCompleted:false
        }
    }
    handleAdd=(itemName)=>{
        var item={
            name:itemName,
            isDone:false
        }
        this.setState({todo:[...this.state.todo,item]})
    }

    toggleDone=(name)=>{
        this.setState({todo:this.state.todo.map((item,i)=>item.name===name?{...item,isDone:!item.isDone}:item)})
    }

    handleDel=(name)=>{
        this.setState({
            todo:this.state.todo.filter((item,i)=>item.name!==name)
        })
    }
    
    render() {
        return (
            <div className="boxsize">
                <h3 className="text-white bg-primary text-center border">TODO App</h3>
                <Add add={this.handleAdd}/>
                <Todo data={this.state.todo}
                      toggleDone={this.toggleDone}
                      label="TODO LIST"
                      del={this.handleDel}/>

                <button onClick={()=>this.setState({showCompleted:!this.state.showCompleted})} className="btn ml-5 text-light bg-primary px-5">SHOW COMPLETED TODOS</button>

                {this.state.showCompleted && <Todo data={this.state.todo.filter(a=>a.isDone)}
                      toggleDone={this.toggleDone}
                      label="COMPLETED"
                      del={this.handleDel}/>}
            </div>
        )
    }

}

export default App