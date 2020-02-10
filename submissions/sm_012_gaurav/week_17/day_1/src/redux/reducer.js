const initialStore = {
  signupResponse: {},
  message: '',
  isLogged: false,
  currentUser: {},
  meeting_data: []
}

const reducer = (state = initialStore, action) => {
  switch(action.type) {
    case "SIGNUP_SUCCESS":
        return {...state, signupResponse: action.signupResponse}
    case "SIGNUP_FAIL":
        return {...state, message: action.message}
    case "LOGIN_SUCCESS":
        return {...state, isLogged: true, currentUser: action.data}
    case "LOGIN_FAIL":
        return {...state, isLogged: false, message: action.message}
    case "LOGOUT_USER":
        return {...state, signupResponse: {}, message: '', isLogged: false, currentUser: {}}
    case "FETCH_DATA":
        return {...state, meetingData: action.data}
    default:
        return state
  }
}

export default reducer