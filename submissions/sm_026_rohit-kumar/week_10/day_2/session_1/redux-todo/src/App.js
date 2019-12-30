import React from 'react';
import AddTask from './components/AddTask'
import Display from './components/Display'
import Total from './components/Total'

function App() {
  return (
    <div>
      <AddTask />
      <Total/>
      <Display/>
    </div>
  );
}

export default App;
