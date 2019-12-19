import React from 'react';

const Header = () => {
  return (
    <div
      className='d-flex justify-content-center border-bottom flex-column align-items-center container'
      style={{ padding: '6rem 8rem' }}
    >
      <h1 className='mt-5 ' style={{ fontSize: '3rem', fontWeight: 'normal' }}>
        Pricing
      </h1>
      <p className='lead'>
        Free equity investments and flat ₹20 intraday and F&O trades
      </p>
    </div>
  );
};

export default Header;
