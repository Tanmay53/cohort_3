import React from "react"
import InputTaker from "./components/InputTaker"
import TodoData from "./components/TodoData"
import Total from "./components/Total"

class App extends React.Component{
  render(){
    return (
      <div className="col-md-6 offset-md-3 col-12 offset-0 shadow p-3 bg-white rounded card text-center">
        <h1 className="text-primary font-weight-bold display-4 my-3">
          TO DO LIST
        </h1>
        <InputTaker/>
        <TodoData/>
        <Total/>
      </div>
    )
  }
}

export default App