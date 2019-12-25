import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FETCH_TODO
} from '../actions/type';

const initialState = {
  items: [],
  completed: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      state.items.push(action.payload);
      console.log(action.payload);
      return {
        ...state
      };
    }
    case FETCH_TODO:
      return {
        ...state
      };
    case UPDATE_TODO: {
      state.completed.push(action.payload);
      state.items.forEach((item, index, arr) => {
        if (item.name == action.payload.name) {
          arr.splice(index, 1);
        }
        return {
          ...state
        };
      });
    }
    default:
      return state;
  }
};
