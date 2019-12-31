import React, { Component } from 'react';
import { viewStaff } from '../../actions/staffAction';
import { connect } from 'react-redux';

class ViewStaff extends Component {
  componentDidMount() {
    this.props.viewStaff();
    console.log(this.props.staff);
  }
  render() {
    return (
      <div className='mt-3'>
        <h2>Staff Details</h2>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Sales Year (FY)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.staff.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    staff: state.staff.staff
  };
};
export default connect(mapStatetoProps, {
  viewStaff
})(ViewStaff);
