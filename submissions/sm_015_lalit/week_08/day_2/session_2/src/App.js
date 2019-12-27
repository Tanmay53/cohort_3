import React from 'react';
import Tasks from './components/Tasks';
import CompletedTasks from './components/CompletedTasks';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasksToDo: [],
      tasksDone: []
    }
  }


  handleAddTask = () => {
    let Task = document.getElementById("inputTask").value
    console.log(Task)
    let totalTasks = this.state.tasksToDo
    totalTasks.push(Task)
    this.setState({
      tasksToDo: totalTasks
    })
    console.log(this.state.tasksToDo)
  }

  handleTaskClick = (e) => {
    let textC = e.target.textContent
    e.target.style={
      color:"green"
    }
    console.log(textC)
    let filteredTask=this.state.tasksToDo.filter(function(ele){
      return ele!==textC
    })
    console.log(filteredTask)
    let selectedData = this.state.tasksDone
    selectedData.push(textC)
    this.setState({
      tasksToDo:filteredTask,
      tasksDone: selectedData
    })
    // console.log(this.state.tasksDone)
  }
   handleShowCompleted=()=>
    {
      return console.log(this.state.tasksDone)
    }


  render() {
    return (
      <div>
        <div className="row my-2">
          <div className="mx-auto">
            <p className="text-center display-4 mb-5">My_Todo_List</p>
            <div className="input-group ">
              <input id="inputTask" className="form-control" type="text" placeholder="Add Tasks here !" />
              <div className="input-group-append">
                <button onClick={this.handleAddTask} type="button" className="btn btn-info">Add</button>
              </div>
            </div>
          </div>
        </div>
        {this.state.tasksToDo.map((e) => {
          return <Tasks selectX={this.handleTaskClick} key={e} taskName={e} />
        })}
        <div className="row">
          <button onClick={this.handleShowCompleted} type="button" className="col-2 btn btn-outline-info mx-auto my-2">Show completed tasks</button>
        </div>
        {/* <CompletedTasks /> */}
        {this.state.tasksDone.map((e) => {
          return <CompletedTasks key={e} xtaskName={e} />
        })}
        
      </div>
    )
  }

}
export default App;
