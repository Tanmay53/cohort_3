import React from 'react';

const Links = () => {
  return (
    <div className='row px-5 pb-5 pt-4 justify-content-between'>
      <div
        className='col-lg-5 py-5 d-flex justify-content-between'
        style={{ borderBottom: '1px solid black' }}
      >
        <a
          href='#'
          style={{
            fontSize: '2.5rem',
            color: 'black',
            textDecoration: 'none'
          }}
        >
          Sign up to Drive
        </a>
        <i class='fas fa-arrow-right fa-3x'></i>
      </div>
      <div
        className='col-lg-5 py-5 d-flex justify-content-between'
        style={{ borderBottom: '1px solid black' }}
      >
        <a
          href='#'
          style={{
            fontSize: '2.5rem',
            color: 'black',
            textDecoration: 'none'
          }}
        >
          Sign up to Ride
        </a>
        <i class='fas fa-arrow-right fa-3x'></i>
      </div>
    </div>
  );
};

export default Links;
