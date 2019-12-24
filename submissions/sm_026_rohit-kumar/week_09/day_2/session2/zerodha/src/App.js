import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import RouteMapper from './components/routeMapper'
import Renderer from './components/renderer'

function App() {
  
  return (
    <BrowserRouter>
      <div>
          <Renderer/>
      </div>
    </BrowserRouter>
  );

}

export default App;
