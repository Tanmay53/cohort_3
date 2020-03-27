const initState = {
  isLogged: false,
  isLoading: true,
  user: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        isLogged: true,
        user: action.payload,
        isLoading: false
      });
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      });
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        isLogged: false,
        user: null
      });
    default:
      return state;
  }
};

export default rootReducer;
