import React from 'react'
import '../App.css'

function Navbar(props){
  return (
    <div className="Navbar">
      {props.children}
    </div>
  )
}

export default Navbar