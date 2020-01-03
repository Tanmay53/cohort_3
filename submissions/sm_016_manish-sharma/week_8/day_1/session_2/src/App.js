import React from 'react';
import './App.css';
import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3';

var data={
  name:'Ricky Park',
  location:'NEW YORK',
  description:'User interface designer and front-end developer',
  skills:['UI/UX','Front End Development','HTML','CSS','JavaScript','React','Node']
}

function App() {
  return (
    <div>
      <Task1 />
      <Task2 />
      <Task3 obj={data} />
    </div>
  );
}

export default App;
