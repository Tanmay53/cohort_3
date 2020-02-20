import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: '',
      mobile: ''
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://127.0.0.1:5000/users/${Number(this.props.match.params.id)}`)
      .then(response => this.setState(response.data))
      .catch(error => console.error(error));
  };

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
      .put(
        `http://127.0.0.1:5000/users/${this.props.match.params.id}`,
        this.state
      )
      .then(() => {
        this.props.history.push(`/users/show/${this.props.match.params.id}`);
      })
      .catch(error => console.error(error));
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h1>Edit User</h1>
        </div>
        <div className='col-6 mx-auto'>
          <UserForm
            changeHandler={this.changeHandler}
            formSubmitHandler={this.formSubmitHandler}
            state={this.state}
            form_type='Edit User'
          />
        </div>
      </div>
    );
  }
}

export default EditUser;
