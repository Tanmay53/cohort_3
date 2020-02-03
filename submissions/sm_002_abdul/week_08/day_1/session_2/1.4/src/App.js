import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Os from './components/Os'
import Manufacturers from './components/Manufacturers'

function App(){

  let data=[
    ['Android','Blackberry','Iphone','Windows Phone'],
    ['Samsung','HTC','Micromax','Apple']
  ]

  return (
    <div>
      <Os items={data[0]}/>
      <Manufacturers elems={data[1]}/>
    </div>
  )
}
export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
