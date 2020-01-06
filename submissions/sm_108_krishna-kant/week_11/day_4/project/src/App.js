import React from 'react';
import './App.css';
import { Navigation } from './component/Navigation/Navigation';
import Main from './layout/main.layout';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
