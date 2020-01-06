import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCurrentOrder } from '../../store/actions/orders';
import { connect } from 'react-redux';
import store from '../../store/store';

class Message extends Component {
  componentDidMount() {
    store.dispatch(fetchCurrentOrder());
    console.log(this.props.currentOrder);
  }
  render() {
    return (
      <div className='d-flex w-100 justify-content-center'>
        <div className='card d-flex flex-column px-5 py-3 rounded mt-3'>
          <div className='w-100'>
            <img
              src='https://image.shutterstock.com/image-vector/completed-tick-stamp-260nw-260643443.jpg'
              className='img-fluid'
            />
          </div>
          <div>
            <h3 className='lead' style={{ fontSize: '2rem' }}>
              Congratulations !
            </h3>
            <p className='lead'>
              order placed : #{this.props.currentOrder.orderNumber}
            </p>
            <p className='lead text-success'>
              Thanks Mr. {this.props.currentOrder.fname}
              <small className='text-muted'>Happy Ride</small>
            </p>
            <Link to='/' className='btn btn-success btn-block rounded-pill'>
              Explore more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentOrder: state.order.currentOrder
});

export default connect(mapStateToProps, { fetchCurrentOrder })(Message);
