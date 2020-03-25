const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialstate = {
    login : false,
    token : localStorage.getItem("token"),
    person:localStorage.getItem("type")
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.payload)
            localStorage.setItem("type",action.person)
            return {
                login: true,
                token: action.payload,
                person:action.person
            }
        case LOGOUT:
            localStorage.clear()
            return {
                login: false,
                token: null,
                person:""
            }
        default:
            return state
    }
}
export default reducer