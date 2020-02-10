import React from 'react';
import Drawer from './Components/Drawer'
import Ditem from './Components/Ditem'
import Navbar from './Components/Navbar'
import Nitem from './Components/Nitem'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Nitem label={'Home'}/>
          <Nitem label={'About'}/>
          <Nitem label={'Products'}/>
          <Nitem label={'Support'}/>
          <Nitem label={'FAQ'}/>
        </Navbar>
        <Drawer>
          <img className="rounded-circle img-fluid mb-3" src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" alt=""/>
          <Ditem icon={<i class="material-icons">collections_bookmark</i>} label={"Starred"} />
          <Ditem icon={<i class="material-icons">email</i>} label={"Send email"} />
          <Ditem icon={<i class="material-icons">drafts</i>} label={"Drafts"} />
          <hr className="row" style={{marginTop:"0px"}} label={"Inbox"} />
          <Ditem icon={<i class="material-icons">move_to_inbox</i>} label={"All email"} />
          <Ditem icon={<i class="material-icons">restore_from_trash</i>} label={"Trash"} />
          <hr className="row" style={{marginTop:"0px"}} label={"Inbox"} />
          <Ditem icon={<i class="material-icons">supervised_user_circle</i>} label={"Privacy Settings"} />
          <Ditem icon={<i class="material-icons">backup</i>} label={"Backup"} />
        </Drawer>
      </>
    )
  }
}