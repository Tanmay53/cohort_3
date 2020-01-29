import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './container/Home';
import Edit from './container/Edit';

function App() {
  return (
    <div className='App'>
      <Route path='/' exact component={Home} />
      <Route path='/edit' component={Edit} />
    </div>
  );
}

export default App;
