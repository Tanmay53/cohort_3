const AUTH = "auth";
const ADD = "add";
const DELETE = "delete";

export const AUTH_ACTION = (username, password) => ({
  type: AUTH,
  payload: { username, password }
});

export const ADD_ACTION = vehicleInfo => ({
  type: ADD,
  payload: vehicleInfo
});

export const DELETE_ACTION = index => ({
  type: DELETE,
  payload: index
});
