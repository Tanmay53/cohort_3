import React from 'react';
import MainPage from './Components/MainPage'
import SideBar from './Components/SideBar'
import EmailSection from './Components/EmailSection'
import './index.css'

function App() {
  return (
      <MainPage
        left={
        <SideBar/>
        }
        right={
        <EmailSection/>
        }
      />
  )
}

export default App;
