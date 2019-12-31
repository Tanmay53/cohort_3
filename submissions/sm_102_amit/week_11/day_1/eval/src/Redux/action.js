import { ADD_CUSTOMER, UPDATE_CUSTOMER } from "./actionType";

// action creator
export const addCustomer = data => {
  return {
    type: ADD_CUSTOMER,
    payload: data
  };
};

export const updateCustomer = () => {
  return {
    type: UPDATE_CUSTOMER
  };
};
