const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

let initialstate = {
    login: false,
    username: ""
}
const loginreducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN: {
            let name = action.payload.data.split("@")[0]
            return {
                ...state,
                login: true,
                username: name
            }
        }
        case LOGOUT: {
            return {
                ...state,
                login: false,
            }
        }
        default: {
            return state
        }
    }
}

export default loginreducer