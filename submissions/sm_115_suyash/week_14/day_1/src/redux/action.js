export const ADD_VEHICLE = "ADD_VEHICLE";
export const DELETE_VEHICLE = "DELETE_VEHICLE";
export const UPDATE_VEHICLE = "UPDATE_VEHICLE";
export const IS_AUTH = "IS_AUTH";

export const addVehicle = payload => ({
  type: ADD_VEHICLE,
  payload
});

export const deleteVehicle = payload => ({
  type: DELETE_VEHICLE,
  payload
});

export const updateVehicle = (payload, id) => {
  //   console.log("id>>>>at action", id);
  return {
    type: UPDATE_VEHICLE,
    payload: payload,
    id: id
  };
};

export const isAuth = payload => ({
  type: IS_AUTH,
  payload
});
