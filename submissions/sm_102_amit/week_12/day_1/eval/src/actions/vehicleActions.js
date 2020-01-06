import {
  LOAD_VEHICLES,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  DELETE_VEHICLE
} from "../actionType";

// action creator
export const vehicleList = data => {
  return {
    type: LOAD_VEHICLES,
    payload: data
  };
};
export const addVehicle = data => {
  return {
    type: ADD_VEHICLE,
    payload: data
  };
};

export const updateVehicle = data => {
  return {
    type: UPDATE_VEHICLE,
    payload: data
  };
};

export const deleteVehicle = id => {
  return {
    type: DELETE_VEHICLE,
    payload: id
  };
};
