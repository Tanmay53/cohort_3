import React from 'react'
import App from '../App'

class Manufacturers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      manufacturers: props.elems
    }
  }

  render(){
    return(
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul>
          <li>{this.state.manufacturers[0]}</li>
          <li>{this.state.manufacturers[1]}</li>
          <li>{this.state.manufacturers[2]}</li>
          <li>{this.state.manufacturers[3]}</li>
        </ul>
      </div>
    )
  }
}

// function Manufacturers(props){
//   console.log(props.elems)
//   return(
//     <div>
//       {props.elems}
//     </div>
//   )
// }

export default Manufacturers