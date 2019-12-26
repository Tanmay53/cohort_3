import React from 'react';
import './App.css';
import Drawer from './Components/Drawer';
import DrawerItem from './Components/DrawerItem';
import Icon from './Components/Icon';
import Toolbar from './Components/Toolbar';
import Sitename from './Components/Sitename';
import Navitem from './Components/Navitem';
function App() {
  return (
    <div className='row'>
      <div className='col-lg-3'>
        <Drawer>
          <Icon icon={'fas fa-bars fa-2x'} />
          <DrawerItem label='fas fa-inbox' title='Inbox' />
          <DrawerItem label='fas fa-envelope' title='Starred' />
          <DrawerItem label='fas fa-paper-plane' title='Send Email' />
          <DrawerItem label='fas fa-pencil-ruler' title='Drafts' />
        </Drawer>
      </div>
      <div className='col-lg-9'>
        <Toolbar>
          <Sitename>
            <Navitem label='Github' />
          </Sitename>
          <div className='p-2'>
            <Navitem label='About Us' />
            <Navitem label='Prices' />
            <Navitem label='Start Page' />
            <Navitem label='Offer' />
            <Navitem label='Contact' />
          </div>
        </Toolbar>
      </div>
    </div>
  );
}

export default App;
