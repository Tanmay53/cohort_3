import React from 'react';

const Toolbar = props => {
  return (
    <div className='bg-primary d-flex justify-content-between'>
      {props.children}
    </div>
  );
};

export default Toolbar;
