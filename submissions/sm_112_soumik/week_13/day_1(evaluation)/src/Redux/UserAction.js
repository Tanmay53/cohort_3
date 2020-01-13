import { IS_AUTH } from "./actionType";
import { ADD_USER } from "./actionType";
import { DEL_USER } from "./actionType";

export const checkAuth = item => {
  return {
    type: IS_AUTH,
    payload: item
  };
};

export const addUser = data => {
  return {
    type: ADD_USER,
    payload: data
  };
};

export const delUser = name => {
  return {
    type: DEL_USER,
    payload: name
  };
};
