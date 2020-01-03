import React, { Component } from 'react';
import { authenticate } from './authorize';

class Auth extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let userDetails = { ...this.state };
    authenticate(this.createAlert, userDetails);
    console.log(this.props);
  };
  createAlert = () => {
    alert('Signup Succesfull');
    this.props.history.push('/bill-summary');
  };
  render() {
    return (
      <form className='col-md-4 offset-md-4 p-5' onSubmit={this.onSubmit}>
        <h3 className='lead'>Please login first to view Report</h3>
        <small className='text-danger'>user : admin , password : admin </small>
        <div className='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='username'
            onChange={this.handleChange}
            value={this.state.username}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
  }
}

export default Auth;
