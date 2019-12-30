import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav class='navbar navbar-expand-lg navbar-light bg-light'>
    <Link to='/' class='navbar-brand' href='#'>
      Staff Manager
    </Link>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span class='navbar-toggler-icon'></span>
    </button>
    <div class='collapse navbar-collapse' id='navbarNav'>
      <ul class='navbar-nav'>
        <li class='nav-item'>
          <Link to='/addCustomer' class='nav-link' href='#'>
            Add Customer
          </Link>
        </li>
        <li class='nav-item'>
          <Link to='/viewCustomer' class='nav-link' href='#'>
            View Customer
          </Link>
        </li>
      </ul>
      <Link to='/login' className='btn btn-outline-success ml-auto'>
        Login
      </Link>
    </div>
  </nav>
);

export default Navbar;
