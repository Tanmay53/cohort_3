import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/BigBasket/Header';
import Footer from './components/BigBasket/Footer';
import GetNow from './components/BigBasket/GetNow';
import Wide from './components/BigBasket/Wide';
import Payment from './components/BigBasket/Payment';
import Covered from './components/BigBasket/Covered';

function App() {
  return (
    <div >
     <Header/>
     <GetNow/>
     <Wide/>
     <Covered/>
     <Payment/>
     <Footer/>
        </div>
  );
}

export default App;
