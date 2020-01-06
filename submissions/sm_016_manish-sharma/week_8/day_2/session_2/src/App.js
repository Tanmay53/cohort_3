import React from 'react';
import './App.css';
import Task from './components/Task'

// arr=[]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameArr: [],
      completed: []
    }
  }
  submit = () => {
    this.setState((state) => {
      state.nameArr.push(document.getElementById('inputs').value)
      return {
        nameArr: state.nameArr
      }
    })
    //------another method
    // let data = this.state.nameArr
    // data.push(document.getElementById('inputs').value)

    // this.setState({
    //   nameArr: data
    // })
    //------    
  }
  todoCallback = (childData) => {
    this.setState((state) => {
      state.completed.push(childData)
      return {
        completed: state.completed
      }
    })
  }

  render() {
    return (
      <div className='m-5'>
        <div className='form-group row'>
          <input className='form-control col-4' id='inputs' type='text' placeholder='+ Add a to-do...' />
          <div className='input-control btn btn-info' onClick={this.submit} >ADD</div>
        </div>
        <div className='h2 text-primary mt-5 font-italic'>Tasks To-Do</div>
        <div className='shadow'>
          {
            this.state.nameArr.map(e => <div key={e} className='text-success'><Task parentCallback={this.todoCallback} name={e} /></div>)
          }
        </div>
        <div className='h2 text-primary mt-5 font-italic text-monospace'>Show complete To-Dos</div>
        <div className='shadow'>
          {
            this.state.completed.map(e => <s key={e} className='text-danger'><Task name={e} /></s>)
          }
        </div>
      </div>
    )
  }
}

export default App;
