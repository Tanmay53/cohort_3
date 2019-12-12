import React from 'react';

const Seconds = props => {
  return (
    <div className='seconds'>
      <div>{props.data}</div>
      <small>s</small>
    </div>
  );
};

export default Seconds;
