import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users_data: []
    };
  }

  componentDidMount = () => {
    axios.get('http://127.0.0.1:5000/users').then(response =>
      this.setState({
        users_data: response.data
      })
    );
  };

  renderTableHeader = () =>
    Object.keys(this.state.users_data[0]).map((val, index) => (
      <th key={index} scope='col'>
        {val}
      </th>
    ));

  renderTableData = () =>
    this.state.users_data.map((user, index1) => {
      return (
        <tr key={index1}>
          {console.log(this.props)}
          {Object.values(user).map((val, index2) => (
            <td key={index2}>
              {index2 === 0 ? (
                <Link to={`/users/show/${Number(val)}`}>{val}</Link>
              ) : (
                val
              )}
            </td>
          ))}
        </tr>
      );
    });

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h1>Users Table</h1>
        </div>
        <div className='row d-flex justify-content-center'>
          {this.state.users_data.length === 0 ? (
            'No Records'
          ) : (
            <table className='table text-center table-sm table-striped'>
              <thead className='thead-dark'>
                <tr>{this.renderTableHeader()}</tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default AllUsers;
