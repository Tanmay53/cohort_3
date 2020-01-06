import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
export const Navigation = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <Link to='/' className='navbar-brand' href='#'>
      <img
        src='https://images.vexels.com/media/users/3/128998/isolated/preview/15630dcae2578399bfabe65c4290ed8a-vintage-car-flat-icon-by-vexels.png'
        className={styles.Logo}
      />
      Cars Rental
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
        <li className='nav-item active'>
          <Link to='/cars' className='nav-link'>
            Show All Cars
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/bill-summary' className='nav-link'>
            View Reports
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
