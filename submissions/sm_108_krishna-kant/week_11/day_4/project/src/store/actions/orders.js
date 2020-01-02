import {
  CREATE_FINAL_ORDER,
  SET_CURRENT_ORDER,
  FETCH_CURRENT_ORDER,
  FETCH_ALL_ORDERS
} from './type';

export const fetchAllOrders = () => ({
  type: FETCH_ALL_ORDERS,
  message: 'fetching all orders'
});

export const createFinalOrder = orderDetails => ({
  type: CREATE_FINAL_ORDER,
  payload: orderDetails,
  message: 'Order Added'
});

export const setCurrentOrder = orderDetails => ({
  type: SET_CURRENT_ORDER,
  payload: orderDetails,
  message: 'current order set'
});

export const fetchCurrentOrder = () => ({
  type: FETCH_CURRENT_ORDER,
  message: 'Show Current Order'
});
