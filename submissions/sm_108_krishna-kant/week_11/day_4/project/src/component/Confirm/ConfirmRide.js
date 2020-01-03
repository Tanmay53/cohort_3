import React, { Component } from 'react';
import Report from '../Report/Report';
import OrderSummary from '../OrderSummary/OrderSummary';
import {
  fetchSelectedCar,
  changeCarLocation,
  fetchTrip
} from '../../store/actions/planTrip';
import { connect } from 'react-redux';
import store from '../../store/store';
import { createFinalOrder, setCurrentOrder } from '../../store/actions/orders';

let orderNumber = 100;
class ConfirmRide extends Component {
  state = {
    fname: '',
    lname: '',
    mobile: ''
  };
  componentDidMount() {
    store.dispatch(this.props.fetchSelectedCar());
    store.dispatch(this.props.fetchTrip());
    console.log(this.props);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  confirmOrder = e => {
    e.preventDefault();
    let orderSummary = {
      orderNumber: ++orderNumber,
      carDetails: {
        ...this.props.selectedCar
      },
      fname: this.state.fname,
      lname: this.state.lname,
      mobile: this.state.mobile,
      trip: this.props.trip
    };

    store.dispatch(this.props.createFinalOrder(orderSummary));

    store.dispatch(this.props.setCurrentOrder(orderSummary));

    store.dispatch(
      this.props.changeCarLocation(this.props.selectedCar, this.props.trip.to)
    );
    this.props.history.push('/order-confirmed');
  };

  render() {
    return (
      <div className='py-2 px-5'>
        <h3 className='lead'>Confirm Your Trip</h3>
        <div className='d-flex'>
          <Report carDetails={this.props.selectedCar} />
          <OrderSummary fuelDetail={this.props.selectedCar.Miles_per_Gallon} />
        </div>
        <form onSubmit={this.confirmOrder}>
          <div className='row'>
            <div className='col-md-5'>
              <div className='form-group'>
                <label>Enter First Name</label>
                <input
                  type='text'
                  placeholder='Enter First Name'
                  className='form-control rounded-pill'
                  value={this.state.fname}
                  onChange={this.handleChange}
                  name='fname'
                />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <label>Enter Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Last Name'
                  className='form-control rounded-pill'
                  value={this.state.lname}
                  onChange={this.handleChange}
                  name='lname'
                />
              </div>
            </div>
          </div>
          <div className='form-group w-25'>
            <label>Enter Email</label>
            <input
              type='number '
              placeholder='Enter Mobile Number'
              className='form-control rounded-pill'
              value={this.state.mobile}
              onChange={this.handleChange}
              name='mobile'
            />
          </div>
          <input
            type='submit'
            value='CONFIRM BOOKING'
            className='btn btn-warning'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCar: state.createTrip.selectedVehicles,
    trip: state.createTrip.currentTripDetail
  };
};

export default connect(mapStateToProps, {
  fetchSelectedCar,
  createFinalOrder,
  setCurrentOrder,
  changeCarLocation,
  fetchTrip
})(ConfirmRide);
