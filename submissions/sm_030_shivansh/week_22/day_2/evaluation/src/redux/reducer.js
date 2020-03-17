

var initialState = {
    loginStatus: { error: true },
    registerStatus: { error: true },
    userData: [],
    product: []
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state
        case "FETCH_POST_LOGIN":
            console.log('action.payload', action.payload)
            return {
                ...state,
                loginStatus: { error: action.payload.data.error },
                userData: [action.payload.info]
            }
        case "FETCH_POST_REGISTER":
            return {
                ...state,
                registerStatus: { error: action.payload.error }
            }
        case "ADD_PRODUCT":
            return {
                ...state,
                product: [...state.product, action.payload]
            }
        case "LOGOUT_USER":
            return {
                ...state,
                loginStatus: { error: true }
            }
        default:
            return state
    }
}