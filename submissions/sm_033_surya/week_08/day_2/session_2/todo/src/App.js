import React from 'react';
import './App.css';
import Add from "./components/Add"
import Todo from "./components/Todo"
import CompletedTodo from './components/CompletedTodo';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      id:1,
      ishided:false
      
    }
  }
  handleAdd =(inputText)=>{
    this.setState({
      id:this.state.id+1
    })
    var temp = {
      item:inputText,
      isCompleted:false,
      id:this.state.id
    }

    this.setState({
      data:[...this.state.data,temp]
    })
  }
toggleon =(index) =>{
  this.setState({
    data:this.state.data.map((item)=>item.id===index ?{...item,isCompleted:!item.isCompleted}:item)
  })
}
delete=(index)=>{
  this.setState({
    data:this.state.data.filter((item)=>item.id!=index)
  })

}
  render(){
    return(
      <div className="container">
        <Add add={this.handleAdd}/>
        <Todo input={this.state.data} toggle={this.toggleon}  del= {this.delete}label="Todo" isCompleted ={this.state.isCompleted}/>
        <button className="btn btn-success mx-4" onClick={()=>this.setState({ishided:!this.state.ishided})}>Show Completed</button>
        {this.state.ishided && <CompletedTodo input={this.state.data.filter(a=>a.isCompleted)} isCompleted ={this.state.isCompleted}  toggle={this.toggleon} del= {this.delete}label="CompletedTodo"/> }
      </div>
    )
  }
}
export default App;
