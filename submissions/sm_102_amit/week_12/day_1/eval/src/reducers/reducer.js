import {
  LOAD_VEHICLES,
  ADD_VEHICLE,
  DELETE_VEHICLE,
  UPDATE_VEHICLE
} from "../actionType";

let id = 0;

let initialState = {
  vehicles: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VEHICLES: {
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload]
      };
    }
    case ADD_VEHICLE: {
      return {
        ...state,
        vehicles: [...state.vehicles, { _id: ++id, ...action.payload }]
      };
    }
    case UPDATE_VEHICLE: {
      return {
        ...state,
        vehicles: state.vehicles.map(vehicle => {
          const {
            _id,
            name,
            type,
            mileage,
            speed,
            cost,
            sales
          } = action.payload;
          if (vehicle._id === id) {
            vehicle._id = _id;
            vehicle.name = name;
            vehicle.type = type;
            vehicle.mileage = mileage;
            vehicle.speed = speed;
            vehicle.cost = cost;
            vehicle.sales = sales;
          }
          return vehicle;
        })
      };
    }
    case DELETE_VEHICLE: {
      return {
        ...state,
        vehicles: state.vehicles.filter(
          vehicle => vehicle._id !== action.payload
        )
      };
    }
    default:
      return state;
  }
};

export default reducer;
