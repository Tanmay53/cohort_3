import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from '../src/route/Router'
import NavBar from './view/component/NavBar'


function App(){
    return (
      <BrowserRouter>
        <NavBar />
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-10 offset-1'>
              <Router />  
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App;
