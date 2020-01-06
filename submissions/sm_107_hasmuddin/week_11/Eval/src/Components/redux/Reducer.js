const initialState = {
  data: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
