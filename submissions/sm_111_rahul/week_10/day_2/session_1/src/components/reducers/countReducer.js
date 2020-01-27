/** @format */

import { ADD_TODO } from "../actions/addTodo";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state + 1;
    default:
      return state;
  }
};

export default  countReducer ;
