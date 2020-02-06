import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import ButtonComp from './component/ButtonComp'

function App(){

  let buttonDetails=[{label:'JOIN US',color:'orange'},{label:'SETTINGS',color:'royalblue'},{label:'LOGIN',color:'teal'},{label:'CONTACT US',color:'maroon'},{label:'SEARCH',color:'limegreen'},{label:'HELP',color:'blue'},{label:'HOME',color:'fuchsia'},{label:'DOWNLOAD',color:'olive'}]
  
  return (
    <div>
      <div className='row p-2'>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[0]}/>
        </div>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[1]}/>
        </div>
      </div>

      <div className='row p-2'>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[2]}/>
        </div>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[3]}/>
        </div>
      </div>

      <div className='row p-2'>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[4]}/>
        </div>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[5]}/>
        </div>
      </div>

      <div className='row p-2'>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[6]}/>
        </div>
        <div className='col-2'>
          <ButtonComp items={buttonDetails[7]}/>
        </div>
      </div>

    </div>
  )
}
export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
