import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users_data: [],
      per_page: 5,
      curr_page: 1,
      total_pages: 1
    };
  }

  getUsers = (page_no, per_page) => {
    axios
      .get(`http://127.0.0.1:5000/users?page=${page_no}&per_page=${per_page}`)
      .then(response => {
        return this.setState({
          ...this.state,
          users_data: response.data.curr_page_users,
          total_pages: response.data.total_pages
        });
      });
  };

  componentDidMount = () => {
    const usp = new URLSearchParams(this.props.location.search);
    let curr_page = usp.get('page') || 1;
    let per_page = usp.get('per_page') || 5;
    this.setState(
      {
        ...this.state,
        curr_page: curr_page,
        per_page: per_page
      },
      () => this.getUsers(curr_page, per_page)
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

  changeHandler = event => {
    let value = Number(event.target.value);
    this.setState(
      {
        ...this.state,
        per_page: value,
        curr_page: 1
      },
      () => {
        this.props.history.push(
          `${this.props.match.url}?page=${1}&per_page=${value}`
        );
        this.getUsers(this.state.page, this.state.per_page);
      }
    );
  };

  renderPagination = () => {
    let total_pages = this.state.total_pages;
    let lists_to_render = [];

    for (let i = 1; i <= total_pages; i++) {
      lists_to_render.push(
        <li className='page-item' key={i}>
          <Link
            to={`${this.props.match.url}?page=${i}&per_page=${this.state.per_page}`}
            className='page-link'
          >
            {i}
          </Link>
        </li>
      );
    }

    return lists_to_render;
  };

  componentDidUpdate = () => {
    let usp = new URLSearchParams(this.props.location.search);
    let curr_page = Number(usp.get('page')) || 1;
    let per_page = Number(usp.get('per_page')) || 5;
    if (
      curr_page !== this.state.curr_page ||
      per_page !== this.state.per_page
    ) {
      axios
        .get(
          `http://127.0.0.1:5000/users?page=${curr_page}&per_page=${per_page}`
        )
        .then(response => {
          this.setState({
            ...this.state,
            users_data: response.data.curr_page_users,
            curr_page: curr_page,
            per_page: per_page,
            total_pages: response.data.total_pages
          });
        });
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h1>Users Table</h1>
        </div>
        <div className='row d-flex justify-content-center'>
          <select
            name='per_page'
            onChange={this.changeHandler}
            value={this.state.per_page}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
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
        <div className='row justify-content-center'>
          <nav aria-label='User Page Navigation'>
            <ul className='pagination'>
              <li className='page-item'>
                <Link to='#' className='page-link'>
                  Start
                </Link>
              </li>

              {this.renderPagination()}

              <li className='page-item'>
                <Link to='#' className='page-link'>
                  End
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default AllUsers;
