import React from 'react';


class ButtonCreate extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        myBtn : this.props.ele,
      }
    }
  
    render(){
      return(
        <div  className="container">
          {this.state.myBtn.map(val => <button className="btn" style={{backgroundColor:val[1]}}>{val[0]}</button>)}
        </div>
      )
    }
  }

  export default ButtonCreate;