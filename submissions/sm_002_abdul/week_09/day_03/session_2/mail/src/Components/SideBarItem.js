import React from 'react'

function SideBarItem(props){
  return (
    <div className="row SideBarItem">
      <div className="col-4 d-flex justify-content-center">
        <h5>{props.icon}</h5>
      </div>
      <div className="col-8">
        <h5>{props.label}</h5>
      </div>
    </div>
  )
}

export default SideBarItem