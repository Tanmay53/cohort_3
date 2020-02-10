import React from 'react';
import { Link } from 'react-router-dom';

const Room = props => {
  return (
    <div className='card m-2' style={{ minWidth: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{props.room_info.name}</h5>
        <p className='card-text'>Capacity: {props.room_info.capacity}</p>
        <p className='card-text'>Floor: {props.room_info.floor}</p>
        <p className='card-text'>Price/day: {props.room_info.price_per_day}</p>
        <div className='d-flex justify-content-between'>
          <Link to={`/change/${props.item_no}`} className='btn btn-primary'>
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
