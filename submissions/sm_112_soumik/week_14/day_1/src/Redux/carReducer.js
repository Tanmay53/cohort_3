import { ADD_CAR, EDIT_CAR } from "./actionType";
import { DEL_CAR } from "./actionType";

const initialState = {
  carList: []
};

const carReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_CAR:
      alert("Added Seccesfully !");
      return {
        carList: [...state.carList, action.payload]
      };
    case DEL_CAR: {
      let model = action.payload;
      let newState = state.carList.filter(item => {
        return item.modelName !== model;
      });
      return {
        carList: newState
      };
    }
    case EDIT_CAR: {
      let car = state.carList;
      let filteredCar = car.filter(
        item => item.modelNo !== action.payload.modelNo
      );
      return {
        carList: [...filteredCar, action.payload]
      };
    }
    default:
      return state;
  }
};

export default carReducer;
