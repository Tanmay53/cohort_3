import {
    FETCH_FAILURE,
    FETCH_SUCCESS,
    FETCH_REQUEST,
    TOGGLE_LOGGEDIN,
    RESET
} from "./actions";

const initialState = {
    isLoading: false,
    data: [],
    error: "",
    isLoggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                data: ""
            };
        case TOGGLE_LOGGEDIN:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            };
        case RESET:
            return {
                ...state,
                isLoading: false,
                data: [],
                error: "",
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default reducer;
