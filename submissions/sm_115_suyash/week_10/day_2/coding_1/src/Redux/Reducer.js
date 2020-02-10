const initialState = {
  listArr: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        listArr: [...state.listArr, action.payload]
      };
    case "COMPLETED":
      let temp = [...state.listArr];
      temp.map(item => {
        if (item.id === action.payload) {
          item.flag = true;

          return item;
        } else {
          return item;
        }
      });

      return {
        ...state,
        listArr: temp
      };
    default:
      return state;
  }
};

export { reducer };
