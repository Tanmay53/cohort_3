export const loginUser = user => {
  return {
    type: 'LOGIN_USER',
    payload: user
  };
};

export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING'
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};
