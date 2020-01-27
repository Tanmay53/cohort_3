import { ADD_VEHICLE, DELETE_VEHICLE, UPDATE_VEHICLE, IS_AUTH } from "./action";

let initialState = {
  vehicleList: [],
  isAuth: false,
  userName: "suyashmishra143143@gmail.com",
  userPass: "samMas@882"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return {
        ...state,
        vehicleList: [...state.vehicleList, action.payload]
      };
    case DELETE_VEHICLE:
      return {
        ...state,
        vehicleList: state.vehicleList.filter((item, index) => {
          if (index != action.payload) {
            return item;
          }
        })
      };
    case UPDATE_VEHICLE:
      console.log("reducer updating", action.id, action.payload);
      return {
        ...state,
        vehicleList: state.vehicleList.map((item, index) => {
          if (index == action.id) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    case IS_AUTH:
      if (
        state.userName == action.payload.userName &&
        state.userPass == action.payload.userPass
      ) {
        return {
          ...state,
          isAuth: true
        };
      }
    default:
      return state;
  }
};

export default reducer;
