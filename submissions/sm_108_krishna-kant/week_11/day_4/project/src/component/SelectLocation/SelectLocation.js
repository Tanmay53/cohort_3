import React, { Component } from 'react';
import { createTrip } from '../../store/actions/planTrip';
import styles from './SelectLocation.module.css';
import { connect } from 'react-redux';
import store from '../../store/store';

class SelectLocation extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const tripDetails = {
      ...this.state
    };

    this.props.createTrip(tripDetails);
    this.props.history.push('/selectCar');
  };

  render() {
    return (
      <div className={styles.SelectLocation}>
        <form className='w-100 p-5' onSubmit={this.onSubmit}>
          <div className='row '>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Select From Location</label>
                <select
                  className='form-control rounded-pill'
                  name='from'
                  value={this.state.from}
                  onChange={this.handleChange}
                >
                  <option value=''>Choose Location</option>
                  <option value='Patna'>Patna</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Kanpur'>Kanpur</option>
                  <option value='Bangalore'>Banglore</option>
                </select>
                <small className='text-muted'>
                  Please choose a from location to ride
                </small>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Select To Location</label>
                <select
                  className='form-control rounded-pill'
                  name='to'
                  value={this.state.to}
                  onChange={this.handleChange}
                >
                  <option value=''>Choose Location</option>
                  <option value='Patna'>Patna</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Kanpur'>Kanpur</option>
                  <option value='Bangalore'>Banglore</option>
                </select>
                <small className='text-muted'>
                  Please choose your destination
                </small>
              </div>
            </div>
            <div className='col-md-4'>
              <label>Press to show available Viechels</label>
              <div className='form-group'>
                <button className='btn btn-success rounded-pill btn-block'>
                  Show All Viechels
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createTrip })(SelectLocation);
