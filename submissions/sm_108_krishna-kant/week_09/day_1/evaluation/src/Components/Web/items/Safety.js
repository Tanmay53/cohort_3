import React from 'react';

const Safety = () => {
  return (
    <div className='d-flex flex-wrap p-5 mt-2'>
      <div className='col-lg-6 col-sm-12'>
        <h1 className='font-weight-normal'>Our commitment to your safety</h1>
        <p className='w-75'>
          With every safety feature we add and every standard in our Community
          Guidelines we uphold, we’re committed to protecting you on the road
          ahead. Learn more about our Community Guidelines here.
        </p>
        <a href='#' className='text-dark'>
          <u>See all safety features</u>
        </a>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <img
          className='img-fluid d-sm-block'
          src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg'
        />
      </div>
    </div>
  );
};

export default Safety;
