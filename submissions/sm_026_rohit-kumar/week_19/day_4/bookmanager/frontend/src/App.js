import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Router from './Router'
import FieldPicker from './components/FieldPicker'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <FieldPicker 
              default={{'text': 'Author', 'value':'author'}} 
              
            />
            <Router />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
