import React from 'react';
import Header from './Product/Header';
import Showcase from './Product/Showcase';
class Product extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default Product;
