import React from 'react';
import Tags from './part3/Tags';
function Cardprofile() {
  return (
    <div>
      <div className='flex-primary'>
        <span className='bg-badge'>PRO</span>
        <div className='img-container'>
          <img
            className='img-fluid'
            src='https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <h2>Ricky Park</h2>
        <span>NEW YORK</span>
        <p>User interface designer and front-end developer</p>
        <div>
          <a href='#' className='btn-primary'>
            Message
          </a>
          <a href='#' className='btn-primary-border'>
            Following
          </a>
        </div>
        <span className='flex-content-start mt-2'>SKILLS</span>
        <Tags />
      </div>
    </div>
  );
}

export default Cardprofile;
