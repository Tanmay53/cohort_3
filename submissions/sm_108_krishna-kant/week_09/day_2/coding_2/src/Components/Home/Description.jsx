import React from 'react';

const Description = () => {
  return (
    <div className='container mt-5 pb-5'>
      <div className='row'>
        <div className='col-lg-5 col-sm-12 '>
          <img
            src='https://zerodha.com/static/images/largest-broker.svg'
            alt=''
            className='img-fluid'
          />
        </div>
        <div className='col-lg-7 col-sm-12'>
          <h1>Largest stock broker in India</h1>
          <p className='lead my-4'>
            1.5+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className='d-flex mt-5'>
            <div className='col-lg-6 col-sm-12'>
              <ul>
                <li className='lead my-1'>Futures and Options</li>
                <li className='lead my-1'>Commodity derivatives</li>
                <li className='lead my-1'>Currency derivatives</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li className='lead my-1'>Stocks & IPOs</li>
                <li className='lead my-1'>Direct mutual funds</li>
                <li className='lead my-1'>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <div className='col-11 mt-3'>
            <img
              src='https://zerodha.com/static/images/press-logos.png'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
