import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { useHistory } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navigation/Navbar';
function App() {
  const history = useHistory();
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Dashboard history={history} />
      </div>
    </Provider>
  );
}

export default App;
