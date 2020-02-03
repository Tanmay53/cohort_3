import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Card from './component/Card'

function App() {
  return (
      <div className='col-12 offset-4'>
        <Card/>
      </div>
  );
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
