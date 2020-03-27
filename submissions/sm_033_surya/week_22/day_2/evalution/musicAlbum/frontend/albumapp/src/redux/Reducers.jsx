const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const IMAGEUP = "IMAGEUP"
const FETCH_GITHUB_FAILURE = "FETCH_GITHUB_FAILURE"

const initialstate = {
    login: false,
    user: "",
    token: "",
    loginerror: ""
}


const loginreducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                login: true,
                user: action.payload.username,
                token: action.payload.token,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                login: false,
                user: "",
                token: "",
            }
        }
        case FETCH_GITHUB_FAILURE:
            alert("inavlid credentials")
            return {
                ...state,
                login: false,
                loginerror: action.error
            };
        default: {
            return state
        }
    }
}

export default loginreducer