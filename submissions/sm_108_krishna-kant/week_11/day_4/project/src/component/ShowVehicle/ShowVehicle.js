import React, { Component } from 'react';
import { fetchTrip, fetchVehicle } from '../../store/actions/planTrip';
import { connect } from 'react-redux';
import store from '../../store/store';
import ViechelView from './VehicleView/VehicleView';

class ShowViechel extends Component {
  componentDidMount() {
    store.dispatch(fetchTrip());
    store.dispatch(fetchVehicle(this.props.tripDetails.from));
    console.log(this.props);
  }
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center p-4'>
        <h2 className='lead align-self-start'>Current Trip Details</h2>
        <div className='row w-100 mt-4'>
          <div className='col-md-2'>
            <label>Current Location</label>
            <input
              type='text'
              className='form-control rounded-pill text-success'
              value={this.props.tripDetails.from}
              disabled
            />
          </div>
          <div className='col-md-2'>
            <label>Current Destination</label>
            <input
              type='text'
              className='form-control rounded-pill text-info'
              value={this.props.tripDetails.to}
              disabled
            />
          </div>
        </div>
        <ViechelView vehicles={this.props.selectedCars} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tripDetails: state.createTrip.currentTripDetail,
    selectedCars: state.createTrip.vehiclesToLocation
  };
};

export default connect(mapStateToProps, { fetchTrip })(ShowViechel);
