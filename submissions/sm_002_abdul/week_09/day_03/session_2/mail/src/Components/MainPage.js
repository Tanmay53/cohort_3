import React from 'react'
import "../index.css"

function MainPage(props){
  return (
    <div className="MainPage">

      <div className="MainPage-left">
        {props.left}
      </div>

      <div className="MainPage-right">
        {props.right}
      </div>

    </div>
  )
}

export default MainPage