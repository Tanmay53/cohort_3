import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  formChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  formSubmitHandler = event => {
    axios
      .post('http://127.0.0.1:8080/auth/login', this.state)
      .then(response => {
        this.props.loginUser(response.data.token);
      })
      .catch(error => alert('Login Failed!'));
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1>Login</h1>
        </div>
        <div className='col-6 mx-auto'>
          <form onSubmit={this.formSubmitHandler}>
            <div className='form-group row'>
              <label htmlFor='username' className='col-sm-2 col-form-label'>
                Username
              </label>
              <div className='col-sm-7'>
                <input
                  type='text'
                  name='username'
                  className='form-control'
                  value={this.state.username}
                  onChange={this.formChangeHandler}
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='password' className='col-sm-2 col-form-label'>
                Password
              </label>
              <div className='col-sm-7'>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  value={this.state.password}
                  onChange={this.formChangeHandler}
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-10'>
                <input
                  type='submit'
                  value='Login'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
