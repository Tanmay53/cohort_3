import React from 'react';
import Task1 from './components/Task1';
import Joinus from './components/Task2';
import { Login } from './components/Task2';
import { Search } from './components/Task2';
import { Home } from './components/Task2';
import { Settings } from './components/Task2';
import { ContactUs } from './components/Task2';
import { Help } from './components/Task2';
import { Download } from './components/Task2';
import Card from './components/Task3'
class App extends React.Component {
  render() {
    return (
      <div>
        <Task1 />
        <div className="row">
          <div className="d-flex flex-column col-4 mx-auto">
            <Joinus />
            <Login />
            <Search />
            <Home />
          </div>
          <div className="d-flex flex-column col-4">
            <Settings />
            <ContactUs />
            <Help />
            <Download />
          </div>
        </div>
        <Card />
      </div>
    )
  }
}


export default App;
