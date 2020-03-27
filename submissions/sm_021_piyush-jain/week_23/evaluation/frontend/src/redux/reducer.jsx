const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const PAGINATION = "PAGINATION"
const PER_PAGE = "PER_PAGE"
const ACTIVE_PAGE = "ACTIVE_PAGE"

const initialstate = {
    login: false,
    token: localStorage.getItem("token"),
    personType: localStorage.getItem("type"),
    activePage: 1,
    dataPerPage: 10,
    pageData: []
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.payload)
            localStorage.setItem("type", action.personType)
            return {
                ...state,
                login: true,
                token: action.payload,
                personType: action.personType
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                login: false,
                token: null,
                personType: ""
            }
        case PAGINATION:
            return {
                ...state,
                pageData: action.payload
            }
        case PER_PAGE:
            return {
                ...state,
                dataPerPage: Number(action.payload)
            }
            case ACTIVE_PAGE:
                return {
                    ...state,
                    activePage: Number(action.payload)
                }
        default:
            return state
    }
}
export default reducer