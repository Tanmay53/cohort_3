import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../actions/loginAction';
import { useHistory } from 'react-router-dom';
let history;

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.auth(this.state);
    console.log(this.props.isLogged.login);
    if (this.props.isLogged.login) {
      this.props.authorization();
      this.props.history.push('/');
    }
  };
  render() {
    return (
      <form className='col-md-4 offset-md-4' onSubmit={this.onSubmit}>
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

const mapStateToProps = state => {
  return {
    isLogged: state.login
  };
};

export default connect(mapStateToProps, {
  auth
})(Login);
