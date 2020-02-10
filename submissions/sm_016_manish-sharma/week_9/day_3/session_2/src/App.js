import React from 'react';
import './App.css';
import DrawerItem from './components/DrawerItem'
import Drawer from './components/Drawer'
import ToolBar from './components/ToolBar'
import SiteName from './components/SiteName'

function App() {
  return (
    <div>
        <div className='bg-primary'>
          <ToolBar>
              <SiteName>
                <DrawerItem label="SITENAME"/>
              </SiteName>
              <div className='ml-auto row mr-2'>
              <DrawerItem label="About us"/>
              <DrawerItem label="Prices"/>
              <DrawerItem label="Other"/>
              <DrawerItem label="Start Page"/>
              <DrawerItem label="Offer"/>
              <DrawerItem label="Contact"/>
              </div>
          </ToolBar>
        </div>
        <div className='drawers border'>
          <div className='p-5'>    </div>
          <hr></hr>
          <Drawer>
              <DrawerItem label="Inbox" icon="inbox"/>
              <DrawerItem label="Starred" icon="mail"/>
              <DrawerItem label="Send email" icon="inbox"/>
              <DrawerItem label="Drafts" icon="mail"/>
              <hr></hr>
              <DrawerItem label="All mail" icon="inbox"/>
              <DrawerItem label="Trash" icon="mail"/>
          </Drawer>
        </div>
    </div>
  );
}

export default App;
