import React from 'react';

const Footer = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1>Uber</h1>
          <p className='my-4'>
            <i class='fas fa-question-circle mr-3'></i> Help Center
          </p>
          <p className='my-4'>
            <i class='fas fa-globe mr-3'></i>English (International)
          </p>
          <p className='my-4'>
            <i class='fas fa-map-marker-alt mr-3'></i>Location
          </p>
          <div className='d-flex mt-5'>
            <img
              src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/b5bc5aec0cbd8d48b47a447140043cdc.svg'
              className='mr-5'
            />
            <img src='https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/d5e4c298d2029a78333a44731948f699.svg' />
          </div>
        </div>
        <div className='col-lg-3'>
          <p className='lead'>About us</p>
          <ul style={{ listStyle: 'none', padding: '0px' }}>
            <li className='my-3'>Newsroom</li>
            <li className='my-3'>Investor Relations</li>
            <li className='my-3'>Global Citizenship</li>
            <li className='my-3'>Safety</li>
            <li className='my-3'>Blog</li>
            <li className='my-3'>Careers</li>
          </ul>
        </div>
        <div className='col-lg-3'>
          <p className='lead'>Products</p>
          <ul
            style={{ listStyle: 'none', padding: '0px' }}
            className='text-left'
          >
            <li className='my-3'>Ride</li>
            <li className='my-3'>Drive</li>
            <li className='my-3'>Eat</li>
            <li className='my-3'>Business</li>
            <li className='my-3'>Freight</li>
            <li className='my-3'>Health</li>
            <li className='my-3'>Uber Air</li>
            <li className='my-3'>Uber works</li>
            <li className='my-3'>Advance Technologies Group</li>
          </ul>
        </div>
      </div>
      <div className='row pt-5 mt-4' style={{ borderTop: '1px solid grey' }}>
        <div className='col-4'>&copy; 2019 Uber Technologies Inc.</div>
        <div className='col-4 d-flex justify-content-around'>
          <small>Privacy</small>
          <small>Accessibility</small>
          <small>Terms</small>
        </div>
        <div className='col-4'>
          <i className='fab fa-facebook fa-2x mx-3'></i>
          <i className='fab fa-instagram fa-2x mx-3'></i>
          <i className='fab fa-linkedin fa-2x mx-3'></i>
          <i className='fab fa-youtube fa-2x mx-3'></i>
          <i className='fab fa-twitter fa-2x mx-3'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
