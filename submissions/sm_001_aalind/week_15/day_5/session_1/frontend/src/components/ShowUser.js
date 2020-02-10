import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props);
    axios
      .get(`http://127.0.0.1:5000/users/${Number(this.props.match.params.id)}`)
      .then(response => this.setState(response.data))
      .catch(error => {
        console.log(error);
        this.props.history.replace('/users/listing');
      });
  };

  deleteUserHandler = () => {
    axios
      .delete(`http://127.0.0.1:5000/users/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/users/listing');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='container justify-content-center'>
        <div className='col d-flex justify-content-center'>
          <h1>User Info</h1>
        </div>
        <div className='col text-center'>
          <p>{this.state.name}</p>
          <p>{this.state.age}</p>
          <p>{this.state.email}</p>
          <p>{this.state.mobile}</p>
          <p>
            <Link to={`/users/edit/${Number(this.props.match.params.id)}`}>
              Edit
            </Link>
          </p>
          <p>
            <Link
              // to={`/users/delete/${Number(this.props.match.params.id)}`}
              to=''
              data-toggle='modal'
              data-target='#exampleModal'
            >
              Delete
            </Link>
          </p>
        </div>
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Delete User
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>Are you sure?</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={this.deleteUserHandler}
                  data-dismiss='modal'
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowUser;
