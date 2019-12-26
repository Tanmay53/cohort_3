import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO } from './type';

export const addTodo = task => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: task
  });
};

export const updateTodo = task => dispatch => {
  dispatch({
    type: UPDATE_TODO,
    payload: task
  });
};

export const deleteTodo = task => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: task
  });
};

export const fetchTodo = () => dispatch => {
  dispatch({
    type: FETCH_TODO,
    payload: null
  });
};
