import React from 'react';
import MobileOSList from './components/MobileOSList'
import MobileManufacture from './components/MobileManufacture'
import Buttons from './components/Buttons'
import Card from './components/Card'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
      {/* Prt-1 */}
        <div className="component1">
          <MobileOSList />
          <MobileManufacture />
        </div>
        {/* Part-2 */}
        <div>
         <Buttons />
        </div>
        {/* Part-3 */}
        <div className = "card">
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
