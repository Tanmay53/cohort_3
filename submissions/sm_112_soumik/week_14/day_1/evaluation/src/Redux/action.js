import { IS_AUTH } from "./actionType";
import { ADD_CAR } from "./actionType";
import { DEL_CAR } from "./actionType";
import { EDIT_CAR } from "./actionType";
import { FILTER_INP } from "./actionType";
export const checkAuth = item => {
  return {
    type: IS_AUTH,
    payload: item
  };
};

export const addCar = data => {
  return {
    type: ADD_CAR,
    payload: data
  };
};

export const delCar = name => {
  return {
    type: DEL_CAR,
    payload: name
  };
};
export const editCar = name => {
  return {
    type: EDIT_CAR,
    payload: name
  };
};

export const filter = input => {
  return {
    type: FILTER_INP,
    payload: input
  };
};
