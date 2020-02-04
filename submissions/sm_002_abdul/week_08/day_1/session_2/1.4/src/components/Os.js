import React from 'react'
import App from '../App'

class Os extends React.Component{
  constructor(props){
    super(props)
    this.state={
      os: props.items
    }
  }

  render(){
    return(
      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          <li>{this.state.os[0]}</li>
          <li>{this.state.os[1]}</li>
          <li>{this.state.os[2]}</li>
          <li>{this.state.os[3]}</li>
        </ul>
      </div>
    )
  }
}

// function Os(props){
//   console.log(props.items)
//   return(
//     <div>
//       {props.items}
//     </div>
//   )
// }

export default Os