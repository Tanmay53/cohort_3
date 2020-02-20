import React from 'react'

import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
    <React.Fragment>
    <App/>
    </React.Fragment>
  
    </BrowserRouter>, document.getElementById('root')
);