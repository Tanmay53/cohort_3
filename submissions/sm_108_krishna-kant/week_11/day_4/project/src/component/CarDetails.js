import React, { Component } from 'react';
import { displayVehicle } from '../store/actions/planTrip';
import { connect } from 'react-redux';
import store from '../store/store';
import { Link } from 'react-router-dom';

class CarDetails extends Component {
  componentDidMount() {
    store.dispatch(displayVehicle(this.props.match.params.car_id));
    console.log(this.props.car);
  }
  render() {
    return (
      <div className='p-5'>
        <h1 className='lead' style={{ height: '2rem' }}>
          Selected Car
        </h1>
        <div className='row'>
          <div className='col-md-4'>
            <img src={this.props.car.img_url} className='img-fluid' />
          </div>
          <div className='col-md-8'>
            <h4 style={{ textTransform: 'uppercase' }}>
              {this.props.car.Name}
            </h4>
            <p className='d-flex justify-content-between w-50'>
              Miles Per Gallon :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Miles_per_Gallon}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Cylinders :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Cylinders}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Displacement :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Displacement}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Horsepower :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Horsepower}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Weight_in_lbs :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Weight_in_lbs}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Acceleration :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Acceleration}
              </span>
            </p>
            <p className='d-flex justify-content-between w-50'>
              Year :
              <span className='badge badge-primary ml-5'>
                {this.props.car.Year}
              </span>
            </p>
          </div>
        </div>
        <Link to='/cars' className='btn btn-info'>
          Go Back
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    car: state.createTrip.selectedVehicles
  };
};

export default connect(mapStateToProps, { displayVehicle })(CarDetails);
