const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialState = {
    login: false,
    token: localStorage.getItem("token")
}                                   

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            localStorage.clear()
            return {
                login: false,
                token: ""
            }
        case LOGIN:
            localStorage.setItem("token",action.payload)
            return {
                login: true,
                token: action.payload
            }
        default:
            return state
    }
}
export default reducer