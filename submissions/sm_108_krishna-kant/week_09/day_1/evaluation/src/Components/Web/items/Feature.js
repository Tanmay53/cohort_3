import React from 'react';

const Feature = () => {
  return (
    <div className='row justify-content-center px-5'>
      <div className='col-lg-4 col-sm-1'>
        <img
          className='img-fluid'
          src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg'
        />
        <h6 className='my-3'>About us</h6>
        <p>
          Find out how we started, what drives us, and how we’re igniting
          opportunity.
        </p>
        <a href='#' className='text-dark'>
          <u>Learn More</u>
        </a>
      </div>
      <div className='col-lg-4 col-sm-1'>
        <img
          className='img-fluid'
          src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg'
        />
        <h6 className='my-3'>Newsroom</h6>
        <p>
          See announcements about our latest releases, initiatives, and
          partnerships.
        </p>
        <a href='#' className='text-dark'>
          <u>Learn More</u>
        </a>
      </div>
      <div className='col-lg-4 col-sm-1'>
        <img
          className='img-fluid'
          src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg'
        />
        <h6 className='my-3'>Global citizenship</h6>
        <p>
          Read about our commitment to making a positive impact in the cities we
          serve.
        </p>
        <a href='#' className='text-dark'>
          <u>Learn More</u>
        </a>
      </div>
    </div>
  );
};

export default Feature;
