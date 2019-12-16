import React from 'react';
import Form from './Form';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: true,
      userName: 'admin',
      password: 'admin',
      alertMessage: '',
      alertClass: ''
    };
  }

  //   Callback when user hit login
  getInputFormFields = (userName, password) => {
    let authUsername = this.state.userName;
    let authPassword = this.state.password;

    if (authUsername === userName && authPassword === password) {
      this.setState({
        showForm: false,
        alertMessage: 'SIGN-IN SUCESSFUL',
        alertClass: 'alert alert-success'
      });
    }
  };

  //Rendering Form if show form is true
  render() {
    let display;
    if (this.state.showForm == true) {
      display = <Form callback={this.getInputFormFields} />;
    } else {
      display = (
        <div className={this.state.alertClass}>{this.state.alertMessage}</div>
      );
    }

    return <div className='p-5'>{display}</div>;
  }
}

export default Login;
