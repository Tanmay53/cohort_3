import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.css';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Switch></Switch>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
