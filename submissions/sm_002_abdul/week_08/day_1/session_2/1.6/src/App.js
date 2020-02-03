import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile'

function App(){

  var data={
    name:'Ricky Park',
    location: 'NEW YORK',
    description: 'User Interface Designer and Front-End Developer',
    skills:['UI/UX','Front End Development','HTML','CSS','Javascript','React','Node']
  }

  return (
    <div className='col-12 offset-4'>
      <Profile item={data}/>
    </div>
  );
}
export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
