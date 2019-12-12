import React from 'react';

const Millisecond = props => {
  return (
    <div className='milliseconds'>
      <div>{props.data}</div>
      <small>ms</small>
    </div>
  );
};

export default Millisecond;
