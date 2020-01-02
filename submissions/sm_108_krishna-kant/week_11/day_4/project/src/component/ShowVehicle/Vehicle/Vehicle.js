import React from 'react';
import { selectCar } from '../../../store/actions/planTrip';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import store from '../../../store/store';

const Vehicle = props => {
  let history = useHistory();
  console.log(props);
  return (
    <div className='card mt-4' style={{ width: '22rem' }}>
      <img
        className='card-img-top img-fluid'
        src={props.vehicle.img_url}
        alt='Card image cap'
        style={{ height: '200px' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.vehicle.Name.toUpperCase()}</h5>
        <p className='lead text-secondary'>
          Miles Per Galon :
          <span className='font-weight-bold text-dark'>
            {props.vehicle.Miles_per_Gallon}
          </span>
        </p>
        <p className='lead text-secondary'>
          Horsepower :
          <span className='font-weight-bold text-dark'>
            {props.vehicle.Horsepower}
          </span>
        </p>
        <p className='lead text-secondary'>
          Acceleration :
          <span className='font-weight-bold text-dark'>
            {props.vehicle.Acceleration}
          </span>
        </p>
        <p className='lead text-secondary'>
          Origin :
          <span className='font-weight-bold text-dark'>
            {props.vehicle.Origin}
          </span>
        </p>
        {props.match.path == '/cars' ? null : (
          <button
            className='btn btn-primary'
            onClick={() => selectACar(props.vehicle, props.selectCar, history)}
          >
            Select
          </button>
        )}
        <Link
          to={`/cars/${props.vehicle.car_id}`}
          className='btn btn-info ml-2'
        >
          View More Details
        </Link>
      </div>
    </div>
  );
};

const selectACar = (vehicle, callback, history) => {
  store.dispatch(callback(vehicle));

  history.push('/confirm-ride');
};
export default connect(null, { selectCar })(Vehicle);
