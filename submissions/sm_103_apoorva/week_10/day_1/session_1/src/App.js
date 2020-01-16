import React from 'react';
import {store} from './components/Store'
import {addCount,subtractCount,mulCount,divCount,moduloCount} from './components/Action'

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      input:''
    }
  }
  render(){
    console.log(store.getState())
    return(
      <div className="mt-4">
        <div className="card m-auto" style={{width:"25rem", backgroundColor:"teal"}}>
          <h1 className="text-center">{store.getState().count}</h1>
          <br></br>
          <input type='text' className="p-2 mx-4" onChange={(e)=>this.setState({input:e.target.value})} placeholder='give some value' />
          <br></br>
          <div className="mb-3">
            <button className="btn btn-warning ml-4" onClick={()=>store.dispatch(addCount(parseInt(this.state.input)))}>ADD</button>
            <button className="btn btn-warning ml-1" onClick={()=>store.dispatch(subtractCount(parseInt(this.state.input)))}>SUBRACT</button>
            <button className="btn btn-warning ml-1" onClick={()=>store.dispatch(mulCount(parseInt(this.state.input)))}>MULTIPLY</button>
            <button className="btn btn-warning ml-1" onClick={()=>store.dispatch(divCount(parseInt(this.state.input)))}>DIVIDE</button>
            <button className="btn btn-warning ml-4 mt-2" onClick={()=>store.dispatch(moduloCount(parseInt(this.state.input)))}>MODULO</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App;


