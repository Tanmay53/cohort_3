import React, { Component } from 'react';
import { fetchAllOrders } from '../../store/actions/orders';
import { connect } from 'react-redux';
import store from '../../store/store';
import TableRow from './TableRow';

class Orders extends Component {
  componentDidMount() {
    store.dispatch(fetchAllOrders());
    console.log(this.props.orders);
  }
  render() {
    return (
      <div className='p-5'>
        <h3 className='lead'>Orders and Reports Detail</h3>
        <table className='table table-bordered'>
          <thead className='thead-dark'>
            <tr className='row'>
              <th className='col'>Order No.</th>
              <th className='col'>Name</th>
              <th className='col'>Mobile</th>
              <th className='col'>To</th>
              <th className='col'>From</th>
              <th className='col'>Car</th>
              <th className='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(order => {
              return <TableRow order={order} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.order.orderList
});

export default connect(mapStateToProps, { fetchAllOrders })(Orders);
