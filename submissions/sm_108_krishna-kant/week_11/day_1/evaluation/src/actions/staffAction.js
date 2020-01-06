import {
  ADD_STAFF,
  UPDATE_STAFF,
  DELETE_STAFF,
  VIEW_STAFF,
  SORT_STAFF
} from './type';

export const addStaff = task => dispatch => {
  dispatch({
    type: ADD_STAFF,
    payload: task
  });
};

export const updateStaff = task => dispatch => {
  dispatch({
    type: UPDATE_STAFF,
    payload: task
  });
};

export const deleteStaff = task => dispatch => {
  dispatch({
    type: DELETE_STAFF,
    payload: task
  });
};

export const viewStaff = () => dispatch => {
  dispatch({
    type: VIEW_STAFF,
    payload: null
  });
};

export const sortStaff = () => dispatch => {
  dispatch({
    type: SORT_STAFF,
    payload: null
  });
};
