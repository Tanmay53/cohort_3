import React from 'react';

const CardRestro = props => {
  return (
    <div className='card mb-3' style={{ maxWidth: '450px' }}>
      <div className='row no-gutters'>
        <div className='col-md-3 p-3'>
          <img
            src='https://source.unsplash.com/random/280x450'
            className='card-img'
          />
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title text-danger font-weight-bolder m-0'>
              {props.user.name}
            </h5>
            <p className='card-text text-muted'>
              <small>{props.user.catagory}</small>
              <br></br>
              <small className='text-muted'>
                cost : {props.user.cost} for one
              </small>
            </p>
            <p className='card-text'>
              <span>Min : {props.user.min}Rs</span>
              <span className='text-muted ml-2'>
                upto {props.user.time} min
              </span>
              <br></br>
              <span>{props.user.payment}</span>
            </p>
          </div>
        </div>
        <div className='col-md-3 d-flex flex-column align-items-end justify-content-start p-2'>
          <p
            className='badge badge-success font-weight-bold'
            style={{ fontSize: '20px' }}
          >
            {props.user.rating}
          </p>
          <small className='text-muted'>{props.user.votes} votes</small>
          <small className='text-muted'>{props.user.reviews} reviews</small>
        </div>
        <div className='card-footer bg-transparent border-secondary col-md-12 px-3'>
          <a href='' className='btn btn-outline btn-danger float-right'>
            Order Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardRestro;
