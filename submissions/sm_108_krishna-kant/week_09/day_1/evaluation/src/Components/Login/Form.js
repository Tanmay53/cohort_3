import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  //   Handling Input for Controlled Form
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  authenticate = e => {
    e.preventDefault();
    this.props.callback(this.state.username, this.state.password);
  };
  render() {
    return (
      <div className='container'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='card p-5'>
            <h3 className='text-primary'>Welcome to Login</h3>
            <form onSubmit={this.authenticate}>
              <div className='form-group'>
                <label>Username or Email Address</label>
                <input
                  type='text'
                  name='username'
                  placeholder='Enter Username'
                  className='form-control'
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  className='form-control'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type='submit'
                  value='Login'
                  className='btn btn-block btn-danger'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
