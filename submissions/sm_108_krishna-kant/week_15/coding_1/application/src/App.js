import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './container/Home';
import Edit from './container/Edit';
import Add from './container/Add';

function App() {
  return (
    <div className='App'>
      <Route path='/' exact component={Home} />
      <Route path='/edit' component={Edit} />
      <Route path='/add' component={Add} />
    </div>
  );
}

export default App;
