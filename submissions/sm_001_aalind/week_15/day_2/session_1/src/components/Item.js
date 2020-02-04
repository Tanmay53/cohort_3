import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <div className='card m-2' style={{ minWidth: '19rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{props.item_info.item}</h5>
        <p className='card-text'>Quantity: {props.item_info.quantity}</p>
        <p
          className={`card-text ${
            props.item_info.purchased.toLowerCase() === 'true'
              ? 'text-success'
              : 'text-danger'
          }`}
        >
          {props.item_info.purchased.toLowerCase() === 'true'
            ? 'Purchased'
            : 'Not Purchased'}
        </p>
        <div className='d-flex justify-content-between'>
          <Link to={`/change/${props.item_no}`} className='btn btn-primary'>
            Edit
          </Link>
          <Link to={`/delete/${props.item_no}`} className='btn btn-primary'>
            Delete
          </Link>
          <Link to={`/mark/${props.item_no}`} className='btn btn-primary'>
          {props.item_info.purchased.toLowerCase() === 'true'
            ? 'Un-Purchase'
            : 'Purchased'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
