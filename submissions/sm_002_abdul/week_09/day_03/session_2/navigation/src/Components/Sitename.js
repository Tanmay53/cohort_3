import React from 'react'
import '../App.css'

function Sitename(props){
  return (
    <div className="Sitename">
      {props.children}
    </div>
  )
}

export default Sitename