import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <React.Fragment>
      <nav className='row navbar-dark bg-primary pr-3 pl-3'>
        <div className='col-4'>
          <Link to='/' className='navbar-brand'>
            Booking App
          </Link>
        </div>
        <div className='col-4 d-flex align-items-center'>
          {props.isLoggedIn() ? (
            <div className='text-light'>{`Welcome ${props.getUser()}`}</div>
          ) : null}
        </div>
        <div className='col-4 d-flex justify-content-end align-items-center'>
          {props.isLoggedIn() ? (
            <React.Fragment>
              <Link to='/orders' className='mr-3 text-light'>
                Orders
              </Link>
              <Link to='#' className='text-light' onClick={props.logoutUser}>
                Logout
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to='/register' className='mr-3 text-light'>
                Register
              </Link>
              <Link to='/login' className='text-light'>
                Login
              </Link>
            </React.Fragment>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navbar;
