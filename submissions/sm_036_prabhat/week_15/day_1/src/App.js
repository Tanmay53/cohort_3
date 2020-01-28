import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { BrowserRouter} from "react-router-dom"
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Auth />
      {/* <Dashboard /> */}
    </BrowserRouter>
  );
}

export default App;
