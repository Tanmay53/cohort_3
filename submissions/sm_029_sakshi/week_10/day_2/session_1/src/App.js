import store from './store';
import React, { Component } from 'react'
import {addTodo,toggleTodo,removeTodo} from './action'
import { connect } from 'react-redux'
import Total from './Total'


 class App extends Component {
  constructor(props){
    super(props)
    this.state={
      input:''
    }
  }
  render() {
    const todo = store.getState().todo
  
    // const l=todo.map(item=>item.isCompleted)
   // console.log(l)

    return (
      <div className="App">
      <h1>TODO_APP-USING_REACT_REDUX</h1>
      <h4>Please enter the item you want to add</h4>
      <input onChange={(e)=>this.setState({input:e.target.value})} placeholder="please enter"/>
      <br></br>
 
{/* ADDING THE TODO ITEM BY CLICKING IT */}
      <button onClick={() => this.props.add(this.state.input)} >ADD ITEM</button>
      <br></br>
      <h4>Todo items are below</h4>

{/* toggle and show todo items HERE */}
      {todo.map(item=>
     (
        <ul>
          <li key={item.id} className="border border-dark bg-warning p-1 m-2 col-5">
            <h4 onClick={()=>this.props.toggle({id:item.id })} 
            style={{ textDecoration: item.isCompleted ? "line-through" : "underline" }} 
            className={item.isCompleted ? "text-success" : "text-danger"} >
           {item.itemName}
            <button className="btn-sm bg-danger float-right " onClick={()=>this.props.delete(item.id)}>REMOVE</button>
            </h4>
            </li>
     
        </ul>)
      )
     }
     <div  className="border-dark p-3 bg-info">
     <Total/>
     </div>
 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   item:state
 }

}


const mapDispatchToProps = (dispatch) => {
  return {
    add: (a) => dispatch((addTodo({itemName:a,id:Date.now(),isCompleted:false}))),
    toggle:(b)=> dispatch((toggleTodo(b))),
    delete:(del)=>dispatch((removeTodo(del)))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)