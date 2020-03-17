import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        price: '',
        category_id: ''
      },
      categories: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://127.0.0.1:5000/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if (!res.data.error) {
          //   console.log(res.data.categories);
          this.setState({
            categories: res.data.payload.categories
          });
        }
      });
  };

  changeHandler = e => {
    this.setState({
      product: {
        ...this.state.product,
        [e.target.name]: e.target.value
      }
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios
      .post('http://127.0.0.1:5000/products', this.state.product, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        alert(res.data.message);
        if (!res.data.error) {
          this.props.history.push('/dashboard');
        }
      });
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.formSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Product Name'
              value={this.state.product.name}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div className='form-group'>
            <select
              className='form-control custom-select'
              value={this.state.product.category_id}
              onChange={this.changeHandler}
              name='category_id'
              required
            >
              <option value='' disabled>
                Select a category
              </option>
              {this.state.categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <input
              type='number'
              name='price'
              className='form-control'
              placeholder='Product Price'
              value={this.state.product.price}
              onChange={this.changeHandler}
              required
              min='0'
            />
          </div>
          <input type='submit' className='btn btn-info' value='Add Product' />
        </form>
      </div>
    );
  }
}

export default AddProduct;
