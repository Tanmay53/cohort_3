import { AUTH } from '../actions/type';

const initialState = {
  username: 'admin',
  password: 'admin'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      if (
        action.payload.username === state.username &&
        action.payload.password === state.password
      ) {
        state.login = true;
      } else {
        state.login = false;
      }
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
