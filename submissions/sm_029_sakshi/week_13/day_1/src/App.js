import React from 'react';
import Cart from './component/Product/Cart';
import Login from './component/Login/Login';
import Watsapp from './component/Web/Watsaap'


function App() {
  return (
    <div>
      <header>
   <Login/>
  <Cart/>
  <Watsapp/>
      </header>
    </div>
  );
}

export default App;
