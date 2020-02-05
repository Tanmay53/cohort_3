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
        </div>
      </div>
    );
  }
}

export default ShowUser;
