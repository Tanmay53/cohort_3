import React from 'react';

const Header = () => {
  return (
    <div
      className='d-flex justify-content-center border-bottom flex-column align-items-center container'
      style={{ padding: '6rem 4rem' }}
    >
      <h1 className='mt-5' style={{ fontSize: '2.8rem', fontWeight: 'normal' }}>
        Technology – <span className='text-muted'>Investments</span>
      </h1>
      <p className='lead'>Sleek, modern, and intuitive trading platforms</p>
    </div>
  );
};

export default Header;
