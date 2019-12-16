import React from "react";

function list(props){
  return(
    <div>
      <h1>{props.header}</h1>
      <ul>
      {props.item.map(ele =><li>{ele}</li>)}
      </ul>
    </div>
  )
}
export default list
