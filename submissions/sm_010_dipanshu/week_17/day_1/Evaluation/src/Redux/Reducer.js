import { SIGNUP, LOGIN, LOGOUT } from "./ActionNames";
import { dummyRooms } from "../Redux/DummyRooms";

const initialState = {
  isLoggedIn: false,
  isSignedUp: false,
  userToken: "",
  meetingRooms: dummyRooms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      if (action.payload) {
        return { ...state, isSignedUp: !state.isSignedUp };
      }
      return state;

    case LOGIN:
      if (action.payload.status) {
        return { ...state, isLoggedIn: true, userToken: action.payload.token };
      }
      return state;

    case LOGOUT:
      return { ...state, isLoggedIn: false, userToken: "" };

    default:
      return state;
  }
};

export default reducer;
