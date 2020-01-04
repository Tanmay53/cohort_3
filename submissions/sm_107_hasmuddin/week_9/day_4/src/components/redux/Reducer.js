const initialState = {
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        data: [...state.data, action.data]
      };
    case "COMPLETE":
      let targetTocomplete = state.data.find(ele => {
        return ele.id === action.id;
      });
      const completedState = state.data.filter(uncomplete => {
        return uncomplete.id !== action.id;
      });
      return {
        data: [...completedState, { ...targetTocomplete, completed: true }]
      };
    case "DELETE":
      let newState = state.data.filter(item => {
        return item.id !== action.id;
      });
      return {
        data: newState
      };
    default:
      return state;
  }
};
