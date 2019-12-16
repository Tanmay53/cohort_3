import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      productItems: [],
      catagoryQuantity: 0
    };
  }
  componentWillMount() {
    let products;
    if (localStorage.getItem('products') != undefined) {
      products = JSON.parse(localStorage.getItem('products'));
      this.setState({ productItems: products });
    }
    let Quantity = 0;
    products.forEach(item => {
      Quantity += parseInt(item.pQuantity);
    });
    this.setState({ catagoryQuantity: Quantity });
  }

  onItemAdded = () => {
    let products;
    if (localStorage.getItem('products') != undefined) {
      products = JSON.parse(localStorage.getItem('products'));
      this.setState({ productItems: products });
    }

    let Quantity = 0;
    products.forEach(item => {
      Quantity += parseInt(item.pQuantity);
    });
    this.setState({ catagoryQuantity: Quantity });
  };

  onFilterAdded = (catagory, cod) => {
    let products;
    if (localStorage.getItem('products') != undefined) {
      products = JSON.parse(localStorage.getItem('products'));
      this.setState({ productItems: products });
    }
    let newProducts = [];
    if (catagory == '') {
      newProducts = products;
    } else {
      if (cod == true) {
        products.forEach(product => {
          if (product.pCatagory == catagory && product.pCOD == true) {
            newProducts.push(product);
          }
        });
      } else {
        products.forEach(product => {
          if (product.pCatagory == catagory) {
            newProducts.push(product);
          }
        });
      }
    }

    let Quantity = 0;
    newProducts.forEach(item => {
      Quantity += parseInt(item.pQuantity);
    });

    this.setState({ productItems: newProducts, catagoryQuantity: Quantity });
  };

  render() {
    return (
      <div className='p-2'>
        <div className='d-flex p-5'>
          <ProductForm callback={this.onItemAdded} />
          <ProductTable
            data={this.state.productItems}
            callback={this.onFilterAdded}
            quantity={this.state.catagoryQuantity}
          />
        </div>
      </div>
    );
  }
}

export default Product;
