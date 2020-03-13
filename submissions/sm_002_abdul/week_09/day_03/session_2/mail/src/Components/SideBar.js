import React from 'react'
import "../App.css"
import SideBarItem from './SideBarItem'

function SideBar(){
  return (
    <div className="SideBar">
      <div className="topEmptyColumn">
      </div>
      <SideBarItem label="Inbox" icon={<i class="fas fa-inbox"></i>}/>
      <SideBarItem label="Starred" icon={<i class="fas fa-envelope"></i>}/>
      <SideBarItem label="Send Email" icon={<i class="fas fa-share-square"></i>}/>
      <SideBarItem label="Draft" icon={<i class="fas fa-envelope"></i>}/>
      <hr/>
      <SideBarItem label="All Mail" icon={<i class="fas fa-envelope"></i>}/>
      <SideBarItem label="Trash" icon={<i class="fas fa-trash"></i>}/>
    </div>
  )
}

export default SideBar