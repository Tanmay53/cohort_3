import React from 'react';
let style = {
  width: '400px'
};
const Header = () => {
  return (
    <div className='d-flex main-header flex-column justify-content-center align-items-center p-5 mb-5'>
      <img
        src='https://zerodha.com/static/images/landing.png'
        className='img-fluid'
        alt=''
        style={style}
      />
      <h1 className='mt-5' style={{ fontSize: '3rem', color: '#333' }}>
        Invest in everything
      </h1>
      <p className='lead mt-2'>
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>
      <button
        className='btn btn-primary px-4 py-2 mt-5'
        style={{ fontSize: '1.3rem' }}
      >
        Sign up now
      </button>
    </div>
  );
};

export default Header;
