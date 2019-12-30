import {
  ADD_STAFF,
  UPDATE_STAFF,
  DELETE_STAFF,
  VIEW_STAFF,
  SORT_STAFF
} from '../actions/type';

const initialState = {
  staff: [],
  currentMember: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STAFF: {
      state.staff.push(action.payload);
      console.log(action.payload);
      return {
        ...state
      };
    }
    case VIEW_STAFF: {
      return {
        ...state
      };
    }
    case DELETE_STAFF: {
      state.staff.forEach((item, index, arr) => {
        if (item.id == action.payload.id) {
          arr.splice(index, 1);
        }
      });
      return {
        ...state
      };
    }
    case UPDATE_STAFF: {
      state.staff.forEach((item, index, arr) => {
        if (item.id == action.payload.id) {
          item = { ...action.payload };
        }
      });
      return {
        ...state
      };
    }
    case SORT_STAFF: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
