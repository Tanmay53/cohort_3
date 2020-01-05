import { AUTH } from './type';

export const auth = task => dispatch => {
  dispatch({
    type: AUTH,
    payload: task
  });
};
