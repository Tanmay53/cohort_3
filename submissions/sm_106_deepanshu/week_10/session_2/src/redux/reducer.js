import { ADD_TODO } from "./action";

const initialState = {
  todoArr: []
};

const reducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      return {
        ...state,
        todoArr: [...state.todoArr, action.payload]
      };
    default:
      return state;
  }
};
export default reducer;
