import {
  CREATE_FINAL_ORDER,
  SET_CURRENT_ORDER,
  FETCH_CURRENT_ORDER,
  FETCH_ALL_ORDERS
} from '../actions/type';

const initialState = {
  orderList: [],
  currentOrder: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FINAL_ORDER: {
      let orders = [...state.orderList];
      orders.push(action.payload);
      return {
        ...state,
        orderList: orders
      };
    }
    case FETCH_ALL_ORDERS: {
      return {
        ...state
      };
    }
    case SET_CURRENT_ORDER: {
      return {
        ...state,
        currentOrder: action.payload
      };
    }
    case FETCH_CURRENT_ORDER: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
