import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navigation/Navbar';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
