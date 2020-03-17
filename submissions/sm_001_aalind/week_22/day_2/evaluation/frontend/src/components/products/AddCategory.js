import React, { Component } from 'react';
import axios from 'axios';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    axios
      .post('http://127.0.0.1:5000/categories', this.state, {
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
              placeholder='Category Name'
              value={this.state.name}
              onChange={this.changeHandler}
              required
            />
          </div>
          <input type='submit' className='btn btn-info' value='Add Category' />
        </form>
      </div>
    );
  }
}

export default AddCategory;
