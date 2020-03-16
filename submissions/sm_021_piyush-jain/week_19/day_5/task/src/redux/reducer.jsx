const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialstate = {
    status : false,
    token : localStorage.getItem("token")
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.payload)
            return {
                status: true,
                token: action.payload
            }
        case LOGOUT:
            localStorage.clear()
            return {
                status: false,
                token: null
            }
        default:
            return state
    }
}
export default reducer