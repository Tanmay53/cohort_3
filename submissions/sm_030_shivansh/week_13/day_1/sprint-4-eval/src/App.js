import React from 'react';
import './App.css';

import WhatsApp from "./components/Web/WhatsApp";
import Login from "./components/Login/Login";
import Cart from "./components/Product/Cart";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <WhatsApp />

        {/* <Login /> */}

        {/* <Cart />  */}


      </div>
    );
  }

}

export default App;
