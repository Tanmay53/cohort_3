const AUTH_ACTION = "auth";
const ADD_ACTION = "add";
const DELETE_ACTION = "delete";

const intitalState = {
  vehicles: [],
  totalSales: 0,
  credentials: { username: "masai", password: "school" },
  isLoggedIn: false
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case AUTH_ACTION:
      if (
        action.payload.username === state.credentials.username &&
        action.payload.password === state.credentials.password
      ) {
        return { ...state, isLoggedIn: true };
      } else {
        alert("Credentials do not match. Try again");
      }
      return state;

    case ADD_ACTION:
      let addedSales = state.totalSales + action.payload.sales;
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
        totalSales: addedSales
      };

    case DELETE_ACTION:
      let newVehicles = state.vehicles.filter((vehicle, index) => {
        return index !== action.payload;
      });
      let removedSales =
        state.totalSales - state.vehicles[action.payload].sales;
      return { ...state, vehicles: newVehicles, totalSales: removedSales };

    default:
      return state;
  }
};

export default reducer;
