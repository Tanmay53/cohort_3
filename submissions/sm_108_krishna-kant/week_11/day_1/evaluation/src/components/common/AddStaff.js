import React from 'react';
import { addStaff } from '../../actions/staffAction';
import { connect } from 'react-redux';
let globalCounter = 0;
class AddStaff extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      number: '',
      year: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const staffMember = {
      ...this.state
    };
    staffMember.id = ++globalCounter;
    this.props.addStaff(staffMember);
    this.setState({
      name: '',
      email: '',
      number: '',
      year: ''
    });
  };

  render() {
    return (
      <div className='mt-3'>
        <h2>Add Staff</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              value={this.state.name}
              name='name'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter email'
              className='form-control'
              value={this.state.email}
              name='email'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Mobile</label>
            <input
              type='Number'
              placeholder='Enter Number'
              className='form-control'
              value={this.state.number}
              name='number'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label>FY YEAR</label>
            <input
              type='number'
              placeholder='Enter Year'
              className='form-control'
              value={this.state.year}
              name='year'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='submit'
              className='btn btn-outline-success'
              value='Add Customer'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  addStaff
})(AddStaff);
