import React from 'react';
import './App.css';
import store from "./store/store"
import {add_task} from './action/action' 
import TODO from './components/TODO'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input:''
    }
  }


  render(){
    const {todolist} =store.getState()
    console.log(todolist)


    return (
      <div className="col-md-6 offset-md-3 col-12 offset-0 shadow p-3 bg-white rounded card text-center">

        <h1 className="text-primary font-weight-bold display-4 my-3">
          TO DO LIST
        </h1>

        <div className='flex my-3'>
          <input
            className='form-control'
            type='text'
            onChange={(e)=>this.setState({input:e.target.value})}
          />
          
          <button
            className='btn btn-primary my-3 col-lg-6 col-12'
            onClick = {()=>store.dispatch(add_task(this.state.input))}
          >
            <span className='font-weight-bold h4'>Add</span>
          </button>
        </div>

        <div>
          <TODO 
            item={todolist}
            label='List Of Items To Do'
          />
        </div>


      </div>
    )
  }
}

export default App
