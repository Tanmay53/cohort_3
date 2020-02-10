import React from 'react';
import Routes from './routes/Routes'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-8 offset-2'>
              <Routes />            
          </div>
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;
