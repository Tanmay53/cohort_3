import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment>
      <nav className='row navbar-dark bg-primary pr-3 pl-3'>
        <div className='col-6'>
          <Link to='/users/listing' className='navbar-brand'>
            CRUD APP
          </Link>
        </div>
        <div className='col-6 d-flex justify-content-end align-items-center'>
          <Link to='/users/create' className='text-light'>
            Add User
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navbar;
