import React from "react"
import "./Rj15.css"
function value(props){
    return(
      <button  className="btn" style={{backgroundColor: props.color}}>{props.label}</button>
    )
}
export default value