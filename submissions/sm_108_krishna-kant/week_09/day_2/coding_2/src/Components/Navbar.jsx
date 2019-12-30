import React from 'react';
import { Link } from 'react-router-dom';
let style = {
  width: '140px'
};
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light py-3'>
      <Link to='/' className='navbar-brand' href='#'>
        <img
          src='https://zerodha.com/static/images/logo.svg'
          className='img-fluid'
          alt=''
          style={style}
        />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item  mx-3'>
            <Link to='/about' className='nav-link' href='#'>
              About <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/product' className='nav-link'>
              Product
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/pricing' className='nav-link'>
              Pricing
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/support' className='nav-link '>
              Support
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <input
              type='button'
              value='Signup'
              className='btn btn-primary py-1 px-4'
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
