const initialStore = {
  isLogged: false,
  token: '',
  loginMessage: '',
  signupMessage: ''
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return { ...state, token: action.data.token, isLogged: true }
    case 'LOGIN_USER_FAILURE':
      return { ...state, loginMessage: action.message }
    case 'LOGOUT_USER':
      return { ...state, isLogged: false, token: '', loginMessage: '', signupMessage: '' }
    case 'SIGNUP_USER':
      return { ...state, signupMessage: action.message }
    default:
      return state
  }
}

export default reducer
