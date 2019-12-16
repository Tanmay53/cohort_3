import React from 'react';
import Tiles from './Tiles';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      tileDetails: [
        ['Earn', 'fas fa-signal'],
        ['Ride', 'fas fa-car'],
        ['Eat', 'fas fa-utensils'],
        ['Frieght', 'fas fa-bus'],
        ['Business', 'fas fa-briefcase'],
        ['Work', 'fab fa-mixcloud'],
        ['Bike', 'fas fa-bicycle'],
        ['Fly', 'fas fa-helicopter']
      ]
    };
  }
  render() {
    return (
      <div className='container py-5'>
        <div className='d-flex justify-content-around bg-white flex-wrap'>
          {this.state.tileDetails.map(tile => {
            return <Tiles tile={tile} />;
          })}
        </div>
        <div className='d-flex flex-column'>
          <div className='col-lg-6 col-sm-12 bg-white p-5'>
            <h1 style={{ fontSize: '3.5rem' }}>
              Get in the driver's seat and get paid
            </h1>
            <p className='my-3'>
              Drive on the largest network of active riders.
            </p>
            <input
              type='button'
              className='btn btn-dark p-3 mt-5'
              style={{ borderRadius: 'none !important' }}
              value='Sign up for the Drive'
            />
            <a className='text-black d-block text-underline mt-4'>
              <u> Learn more about driving and delivering</u>
            </a>
          </div>
          <div className='col-lg-6 col-sm-0'></div>
        </div>
      </div>
    );
  }
}

export default Header;
