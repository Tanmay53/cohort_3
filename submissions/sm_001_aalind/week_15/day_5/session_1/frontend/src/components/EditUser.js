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
      .catch(error => console.log(error));
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
      .then(response => {
        console.log(response.data);
        this.props.history.push(`/users/show/${this.props.match.params.id}`);
      })
      .catch(error => console.log(error));
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
            form_type="Edit User"
          />
          {/* <form onSubmit={this.formSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='age'>Age</label>
              <input
                type='number'
                name='age'
                className='form-control'
                value={this.state.age}
                onChange={this.changeHandler}
                min='1'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                value={this.state.email}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile</label>
              <input
                type='text'
                name='mobile'
                className='form-control'
                value={this.state.mobile}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value='Edit User'
                className='form-control btn btn-primary'
              />
            </div>
          </form> */}
        </div>
      </div>
    );
  }
}

export default EditUser;
