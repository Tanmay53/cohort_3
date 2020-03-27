import {
    REQUEST_TEACHERS,
    ADD_TEACHER,
    SUCCESS_REQUEST,
    FILTER_TEACHER
} from "./Types"

const initialState = {
    loading: false,
    response: '',
    message: '',
}

export const TeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_REQUEST:
            return {
                ...state,
                response: action.payload
            }
        case ADD_TEACHER:
            return {
                ...state,
                message: action.payload
            }
        case REQUEST_TEACHERS:
            return {
                ...state,
                loading: true,
                response: "",
                message: ""
            }

        case FILTER_TEACHER:
            return {
                ...state,
                response: action.payload
            }

        default: return state
    }
}