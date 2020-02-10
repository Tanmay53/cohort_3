import React from 'react';
// import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className='container'>
          {alert("hi")}
        {console.log(this.props)}
        <h1>Page Not Found!</h1>
        {/* <Link to='/home'>Home</Link> */}
      </div>
    );
  }
}

export default NotFound;
