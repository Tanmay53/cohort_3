import React from 'react'

class ButtonComp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Btnlabel:props.items.label,
      Btncolor:props.items.color
    }
  }
  render(){
    let styles={
      background:this.state.Btncolor,
      width:'150px'
    }
    return(
      <div>
        <button style={styles}>
          {this.state.Btnlabel}
        </button> 
      </div>
    )
  }
}

export default ButtonComp