import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import InputTaker from './components/InputTaker'
import TODO from "./components/TODO";

const shortid=require('shortid')

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      showCompleted:false,
    };
  }


  handleAdd=(itemName) =>{
    var item={
      name:itemName,
      isDone: false,
      id:shortid.generate()
    }
    this.setState({
      todoList:[...this.state.todoList,item]
    })  
  }

  toggleDone=(idFromChild)=>{
    this.setState({
      todoList:this.state.todoList.map((elem)=> elem.id===idFromChild ? {...elem,isDone:!elem.isDone} : elem)
    })
  }

  handleDel=(idFromChild)=>{
    this.setState((prevState)=>{
      return {
        todoList: prevState.todoList.filter((el)=>el.id!==idFromChild)
      }
    })
  }

  render() {
    console.log(this.state.todoList)
    return (
      <div className="col-md-6 offset-md-3 col-12 offset-0 shadow p-3 bg-white rounded card text-center">

        <h1 className="text-primary font-weight-bold display-4 my-3">
          TO DO LIST
        </h1>
      
        <InputTaker add={this.handleAdd}/>
        
        <div>
          <TODO 
            item={this.state.todoList}
            toggleDone={this.toggleDone}
            label='List Of Items To Do'
            del={this.handleDel}
          />
        </div>

        <button
        className='btn btn-primary col-lg-6 offset-lg-3 col-md-12 offset-md-0' 
        onClick={()=>{
          this.setState((prevState)=>{
            return {
              showCompleted:!prevState.showCompleted
            }
          })
        }}>SHOW COMPLETED TO-DO</button>


        {this.state.showCompleted   /*conditional rendering*/
        &&
          <div>
            <TODO 
              item={this.state.todoList.filter(elem=>elem.isDone)}
              label='Completed List '
              del={this.handleDel}/>
          </div>
        }

      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
