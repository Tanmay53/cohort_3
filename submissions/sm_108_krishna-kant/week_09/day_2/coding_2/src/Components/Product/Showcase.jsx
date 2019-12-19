import React from 'react';

const Showcase = () => {
  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-lg-8 col-sm-12 py-5 text-center'>
          <img
            className='img-fluid'
            src='https://zerodha.com/static/images/products-kite.png'
            alt=''
          />
        </div>
        <div className='col-lg-4 col-sm-12 py-5'>
          <h1 className='pt-5 display-4'>Kite</h1>
          <p className='lead mt-3'>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <span className='text-primary lead my-4 d-block'>Learn more </span>
          <div>
            <img
              src='https://zerodha.com/static/images/google-play-badge.svg'
              alt=''
              className='img-fluid mx-2'
            />
            <img
              src='https://zerodha.com/static/images/appstore-badge.svg'
              alt=''
              className='img-fluid mx-2'
            />
          </div>
        </div>
      </div>
      <div className='row py-5'>
        <div className='col-lg-4 col-sm-12 py-5'>
          <h1 className='pt-5 display-4'>Console</h1>
          <p className='lead mt-3'>
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <span className='text-primary lead my-4 d-block'>Learn more </span>
        </div>
        <div className='col-lg-8 col-sm-12 py-5 text-center'>
          <img
            className='img-fluid'
            src='https://zerodha.com/static/images/products-console.png'
            alt=''
          />
        </div>
      </div>
      <div className='row py-5'>
        <div className='col-lg-8 col-sm-12 py-5'>
          <img
            className='img-fluid'
            src='https://zerodha.com/static/images/products-coin.png'
            alt=''
          />
        </div>
        <div className='col-lg-4 col-sm-12 py-5'>
          <h1 className='pt-5 display-4'>Coin</h1>
          <p className='lead mt-3'>
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <span className='text-primary lead my-4 d-block'>Coin</span>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
