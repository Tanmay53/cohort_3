import React from "react";
import store from "./redux/store";
import "./App.css";
import { addTodo, deleteItem, toggleItem } from "./redux/action";

const Completed = (props) => {
    let completed = props.completed
    return (
        <div>
            {completed.map((item,index) =><li key={item+index}>{item.itemName}</li>)}
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            isCompleted: false,
            completedTasks: []
        };
    }

    handelChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    filterTrue = () => {
        let todoData = store.getState().todo;
        // console.log("To do Data", todoData)
        let data = todoData.filter(item => item.completed === true);
        this.setState({
            completedTasks: data,
            isCompleted: !this.state.isCompleted
        });
    };

    render() {
        const todo = store.getState().todo;
        // console.log(todo);
        let show = this.state.isCompleted;
        console.log(show);
        return (
            <div>
                <h1 style={{textAlign:"center"}}>ADD ITEMS</h1>
                <br></br>
                <input style={{ padding: 10 }} name="input" value={this.state.input} onChange={this.handelChange} placeholder="Enter Task" />
                <button style={{ padding: 10 }} onClick={() => { store.dispatch(addTodo(this.state.input)); }}> CLICK TO ADD </button>
                <ul style={{marginLeft:"auto", marginRight:"auto", display:"block"}}>
                    {todo.map((item, index) => (
                        <ol style={{marginLeft:"auto", marginRight:"auto", display:"block"}} key={item.itemName + index}> {index+1}
                            <input type="checkbox" onClick={() => { store.dispatch(toggleItem(item.itemName)) }}></input> {`  ${item.itemName} `}
                            <button onClick={() => {store.dispatch(deleteItem(index))}}>Delete</button>
                        </ol>
                    ))}
                </ul>
                <button  onClick={this.filterTrue}>SHOW COMPLETED</button>
                {this.state.isCompleted && <Completed completed={this.state.completedTasks} />}
            </div>
        );
    }
}

export default App;