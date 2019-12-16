import React from 'react';

let products;

if (localStorage.getItem('products') == undefined) {
  products = [];
} else {
  products = JSON.parse(localStorage.getItem('products'));
}

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productID: '',
      sellerName: '',
      productCatagory: '',
      productCOD: '',
      productQuantity: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == 'productCOD') {
      this.setState({ [e.target.name]: e.target.checked });
    }
  };

  createProduct = e => {
    e.preventDefault();
    let product = new ProductItem(
      this.state.productName,
      this.state.productID,
      this.state.sellerName,
      this.state.productCatagory,
      this.state.productCOD,
      this.state.productQuantity
    );

    products.push(product);

    let stream = JSON.stringify(products);

    localStorage.setItem('products', stream);

    this.setState(
      {
        productName: '',
        productID: '',
        sellerName: '',
        productCatagory: '',
        productCOD: '',
        productQuantity: ''
      },
      () => {
        this.props.callback();
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createProduct}>
          <div className='form-group'>
            <label>Product Name</label>
            <input
              type='text'
              placeholder='Enter Product Name'
              value={this.state.productName}
              name='productName'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Product ID</label>
            <input
              type='text'
              placeholder='Enter Product ID'
              value={this.state.productID}
              name='productID'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Seller Name</label>
            <input
              type='text'
              placeholder='Enter Seller Name'
              value={this.state.sellerName}
              name='sellerName'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Product Catagory</label>
            <select
              name='productCatagory'
              value={this.state.productCatagory}
              className='form-control'
              onChange={this.handleChange}
            >
              <option value=''>Select One</option>
              <option value='Cereals'>Cereals</option>
              <option value='FMCG'>FMCG</option>
              <option value='Cosmetics'>Cosmetics</option>
              <option value='Household'>Household</option>
              <option value='Medicare'>Medicare</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Cash on Delivery</label>
            <br />
            <input
              type='checkbox'
              value={this.state.productCOD}
              name='productCOD'
              onChange={this.handleChange}
            />
            <small className='text-muted'>
              Check the box if Cash on Delivery available
            </small>
          </div>
          <div className='form-group'>
            <label>Product Quantity</label>
            <select
              name='productQuantity'
              value={this.state.productQuantity}
              className='form-control'
              onChange={this.handleChange}
            >
              <option value=''>Select One</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
              <option value='200'>200</option>
            </select>
          </div>
          <div>
            <input
              type='submit'
              className='btn btn-success btn-block'
              value='Add to Cart'
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

function ProductItem(pName, pID, sName, pCatagory, pCOD, pQuantity) {
  this.pName = pName;
  this.pID = pID;
  this.sName = sName;
  this.pCatagory = pCatagory;
  this.pCOD = pCOD;
  this.pQuantity = pQuantity;
}
export default ProductForm;
