const initialState = {
    "isLoggedIn": false,
    "loading": false,
    "error": false,
    "message": "",
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                "loading": false,
                "isLoggedIn": true,
                "error": action.payload.error,
                "message": action.payload.message
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                "loading": false,
                "isLoggedIn": false,
                "error": true,
                "message": action.payload.message
            }
        case "LOGIN_REQUEST":
            return {
                ...state,
                "loading": true,
                "isLoggedIn": false,
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...state,
                "isLoggedIn": false,
                "message": ""
            }
        default: return state
    }
}