/* eslint-disable no-useless-constructor */
import React from 'react';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import Uber from './Components/Web/Uber';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <Product /> */}
        <Uber />
      </React.Fragment>
    );
  }
}



export default App;
