import React from 'react';
const Tiles = props => {
  return (
    <div
      style={{ borderBottom: props.border }}
      className='col-lg-1 col-sm-2 d-flex bg-white font-special flex-column justify-content-center align-items-center text-center p-5'
    >
      <i className={props.tile[1]}></i>
      <small
        className='mt-3 text-dark font-weight-bold'
        style={{ fontSize: '.9rem' }}
      >
        {props.tile[0]}
      </small>
    </div>
  );
};

export default Tiles;
