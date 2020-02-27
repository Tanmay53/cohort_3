import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE
} from './Action'

const initialState = {
    isLoading: false,
    isLogin: false,
    query: "",
    data: [],
    login_response: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                query: action.query
            }
        
        case FETCH_REGISTER_SUCCESS:
            // sconsole.log(state.data)
            const loginResponse = JSON.stringify(action.data)
            localStorage.setItem("loginResponse", loginResponse)
            // const loginRes
            return {
                isLoading: false,
                data: action.data,
                error: state.error,
                isLogin: true
            }
        
        case FETCH_REGISTER_FAILURE:
            return {
                isLoading: false,
                data: state.data,
                error: action.error
            }

        default:
            return state
    }
}

export default reducer