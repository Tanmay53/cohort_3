import {
  LOGIN,
  ADD_POST,
  FILTER_POST,
  EDIT_POST,
  ADD_COMMENT
} from "./actionType";

export const checkLogin = item => {
  return {
    type: LOGIN,
    payload: item
  };
};

export const addPost = item => {
  return {
    type: ADD_POST,
    payload: item
  };
};

export const filterPost = item => {
  return {
    type: FILTER_POST,
    payload: item
  };
};

export const addComment = item => {
  return {
    type: ADD_COMMENT,
    payload: item
  };
};

export const editPost = item => {
  return {
    type: EDIT_POST,
    payload: item
  };
};
