/** @format */

const initialState = {
  data: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        data: [...state.data, action.payload]
      };
    case "DELETE_USER":
      const newData = state.data.filter(user => {
        return user.id !== action.id;
      });
      return {
        data: newData
      };

    case "SORT_USERS": {
      if (action.typeSort == "asc") {
        let data = action.data;
        let sortedData = data.sort((a, b) => {
          return a.cibilScore - b.cibilScore;
        });
        return {
          data: sortedData
        };
      } else if (action.typeSort == "desc") {
        let data = action.data;
        let sortedData = data.sort((a, b) => {
          return b.cibilScore - a.cibilScore;
        });
        return {
          data: sortedData
        };
      }
      break;
    }

    case "UPDATE_USER":
      const updatedData = state.data.filter(user => {
        return user.id !== action.id;
      });
      return {
        data: [...updatedData, action.newUser]
      };
    default:
      return state;
  }
};

export default Reducer;
