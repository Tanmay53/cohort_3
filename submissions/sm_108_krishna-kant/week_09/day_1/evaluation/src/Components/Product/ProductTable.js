import React from 'react';
import Row from './Row';
class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productItems: this.props.data,
      productCatagory: '',
      productCOD: '',
      catagoryQuantity: this.props.quantity
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == 'productCOD') {
      this.setState({ [e.target.name]: e.target.checked });
    }
  };

  filterData = () => {
    this.props.callback(this.state.productCatagory, this.state.productCOD);
  };

  componentWillReceiveProps(newState) {
    this.setState({
      productItems: newState.data,
      catagoryQuantity: newState.quantity
    });
  }

  render() {
    return (
      <div className='ml-4'>
        <h4>Product Display</h4>
        <div className='row my-3'>
          <div className='col-6'>
            <label>Search By Catagory</label>
            <select
              name='productCatagory'
              value={this.state.productCatagory}
              className='form-control'
              onChange={this.handleChange}
            >
              <option value=''>Select All</option>
              <option value='Cereals'>Cereals</option>
              <option value='FMCG'>FMCG</option>
              <option value='Cosmetics'>Cosmetics</option>
              <option value='Household'>Household</option>
              <option value='Medicare'>Medicare</option>
            </select>
          </div>
          <div className='col-4'>
            <label>Check to show available Products</label>
            <br />
            <input
              type='checkbox'
              value={this.state.productCOD}
              name='productCOD'
              onChange={this.handleChange}
            />
          </div>
          <div className='col-2'>
            <input
              type='button'
              onClick={this.filterData}
              className='btn btn-info'
              value='Show'
            />
          </div>
        </div>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Seller Name</th>
              <th>Product Catagory</th>
              <th>Cash on Delivery</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productItems.map(product => {
              return <Row key={product.pID} data={product} />;
            })}
            <tr>
              <th>Total Quantity : {this.state.catagoryQuantity}KG</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
