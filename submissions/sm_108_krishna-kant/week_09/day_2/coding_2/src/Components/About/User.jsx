import React from 'react';

const User = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <h1>People</h1>
        <div className='d-flex col-lg-12 mt-5'>
          <div className='col-lg-4 col-sm-12 text-center'>
            <img
              src='https://zerodha.com/static/images/nithin-kamath.jpg'
              alt=''
              className='img-fluid rounded-circle'
            />
            <h3 className='lead mt-4'>Nithin Kamath</h3>
            <span className='mt-3 d-block'>Founder, CEO</span>
          </div>
          <div className='col-lg-8 ml-5 col-sm-12'>
            <p className='my-3 lead'>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className='my-3 lead'>
              He was named one of the “Top 10 Businessmen to Watch Out for in
              2016 in India” by The Economic Times for pioneering and scaling
              discount broking in India.
            </p>
            <p className='my-3 lead'>Playing basketball is his zen.</p>
            <p className='my-3 lead'>
              Connect on <span className='text-info'>TradingQnA / Twitter</span>
            </p>
          </div>
        </div>
        <div className='col-lg-12 d-flex justify-content-around mt-5'>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://zerodha.com/static/images/Austin.jpg'
              alt=''
              className='img-fluid rounded-circle'
            />
            <h3 className='lead mt-4'>Nikhil Kamath</h3>
            <span className='mt-3 d-block'>Co-founder & CIO</span>
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://zerodha.com/static/images/Nikhil.jpg'
              alt=''
              className='img-fluid rounded-circle'
            />
            <h3 className='lead mt-4'>Dr. Kailash Nadh</h3>
            <span className='mt-3 d-block'>CTO</span>
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img
              src='https://zerodha.com/static/images/Kailash.jpg'
              alt=''
              className='img-fluid rounded-circle'
            />
            <h3 className='lead mt-4'>Austin Prakesh</h3>
            <span className='mt-3 d-block'>Director - Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
