const initialState = {
    "isLoggedIn": false,
    "loading": false,
    "error": false,
    "message": "",
}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                "loading": false,
                "error": action.payload.error,
                "message": action.payload.message
            }
        case "SIGNUP_FAILURE":
            return {
                ...state,
                "loading": false,
                "isLoggedIn": false,
                "error": true,
                "message": action.payload.message
            }
        case "SIGNUP_REQUEST":
            return {
                ...state,
                "loading": true,
                "isLoggedIn": false,
            }
        default: return state
    }
}