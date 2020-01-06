import {
  CREATE_TRIP,
  FETCH_TRIP,
  FETCH_VEHICLES,
  SELECT_CAR,
  FETCH_SELECTED_CAR,
  CHANGE_CAR_LOCATION,
  FETCH_ALL_VEHICLES,
  DISPLAY_VEHICLE
} from '../actions/type';
import data from '../../assets/db.json';

const initialState = {
  currentTripDetail: {
    from: '',
    to: ''
  },
  vehicles: data,
  vehiclesToLocation: [],
  selectedVehicles: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRIP: {
      return {
        ...state,
        currentTripDetail: {
          ...action.payload
        }
      };
      break;
    }
    case FETCH_TRIP: {
      return {
        ...state
      };
      break;
    }
    case FETCH_VEHICLES: {
      let selectedVehicles = state.vehicles.filter(vehicle => {
        if (action.payload === vehicle.location) {
          return vehicle;
        }
      });
      return {
        ...state,
        vehiclesToLocation: selectedVehicles
      };
      break;
    }
    case SELECT_CAR: {
      return {
        ...state,
        selectedVehicles: action.payload
      };
      break;
    }
    case FETCH_SELECTED_CAR: {
      return {
        ...state
      };
      break;
    }
    case DISPLAY_VEHICLE: {
      let vehicleCurrent = state.vehicles.find(vehicle => {
        console.log(vehicle.car_id, action.payload);
        return vehicle.car_id == action.payload;
      });
      console.log(vehicleCurrent);

      return {
        ...state,
        selectedVehicles: vehicleCurrent
      };
    }
    case CHANGE_CAR_LOCATION: {
      let vehicles = [...state.vehicles];
      console.log(action.payload);
      vehicles.forEach(vehicle => {
        if (vehicle.Name == action.payload.car.Name) {
          vehicle.location = action.payload.to;
        }
        return {
          ...state,
          vehicles: vehicles
        };
      });
    }
    case FETCH_ALL_VEHICLES: {
      return {
        ...state
      };
    }
    default:
      return {
        ...state
      };
  }
};
