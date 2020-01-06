import React, { Component } from 'react';
import { fetchAllCars } from '../store/actions/planTrip';
import { connect } from 'react-redux';
import store from '../store/store';
import ViechelView from './ShowVehicle/VehicleView/VehicleView';

class Cars extends Component {
  componentDidMount() {
    store.dispatch(fetchAllCars());
  }
  render() {
    return (
      <div className='p-5'>
        <h2 className='lead text-center' style={{ fontSize: '2rem' }}>
          All Cars in Store
        </h2>
        <div className='d-flex justify-content-around flex-wrap'>
          <ViechelView vehicles={this.props.cars} {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.createTrip.vehicles
});

export default connect(mapStateToProps, { fetchAllCars })(Cars);
