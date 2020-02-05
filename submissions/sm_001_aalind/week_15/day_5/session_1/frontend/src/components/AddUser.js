import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      mobile: ''
    };
    this.initState = this.state;
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  formSubmitHandler = event => {
    axios
      .post('http://127.0.0.1:5000/users', this.state)
      .then(response => {
        console.log(response.data);
        this.setState(this.initState);
      })
      .catch(error => console.log(error));
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <h1>Add User</h1>
        </div>
        <div className='col-6 mx-auto'>
          <UserForm
            formSubmitHandler={this.formSubmitHandler}
            changeHandler={this.changeHandler}
            state={this.state}
            form_type="Add User"
          />
        </div>
      </div>
    );
  }
}

export default AddUser;
