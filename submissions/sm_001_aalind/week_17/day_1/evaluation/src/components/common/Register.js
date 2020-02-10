import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      username: '',
      mobile: '',
      description: ''
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
      .post('http://127.0.0.1:8080/auth/register', this.state)
      .then(response => {
        if (response.data.error) {
          alert(response.data.message);
        } else {
          this.props.history.push('/login');
        }
      })
      .catch(error => console.log(error));

    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1>Registration</h1>
        </div>
        <div className='col-6 mx-auto'>
          <form onSubmit={this.formSubmitHandler}>
            <div className='form-group row'>
              <label htmlFor='name' className='col-sm-2 col-form-label'>
                Name
              </label>
              <div className='col-sm-7'>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  value={this.state.name}
                  onChange={this.formChangeHandler}
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='email' className='col-sm-2 col-form-label'>
                Email
              </label>
              <div className='col-sm-7'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  value={this.state.email}
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
              <label htmlFor='mobile' className='col-sm-2 col-form-label'>
                Mobile
              </label>
              <div className='col-sm-7'>
                <input
                  type='text'
                  name='mobile'
                  className='form-control'
                  value={this.state.mobile}
                  onChange={this.formChangeHandler}
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='description' className='col-sm-2 col-form-label'>
                Description
              </label>
              <div className='col-sm-7'>
                <input
                  type='text'
                  name='description'
                  className='form-control'
                  value={this.state.description}
                  onChange={this.formChangeHandler}
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-7'>
                <input
                  type='submit'
                  value='Register'
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

export default Register;
