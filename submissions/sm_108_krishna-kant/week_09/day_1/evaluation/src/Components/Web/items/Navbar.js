import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon text-white'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
        <a className='navbar-brand text-white' href='#'>
          <span className='font-weight-bold'>U</span>ber
        </a>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <a className='nav-link text-white' href='#'>
              <small className='font-weight-bold'>Product</small>{' '}
              <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='#'>
              <small>Company</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='#'>
              <small>Safety</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='#'>
              <small>Help</small>
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto mt-2 mt-lg-0 justify-content-end'>
          <li className='nav-item active float-right'>
            <a className='nav-link text-white' href='#'>
              <i className='fas fa-globe-americas'></i>
              <small className='font-weight-bold'>&nbsp;&nbsp; EN</small>
              <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='#'>
              <i className='fas fa-user mr-2'></i>
              <small>Log in</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className=' btn btn-light' href='#'>
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
