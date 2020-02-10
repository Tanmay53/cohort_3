
const initState = {
    token: '',
    isLogin: false
}

const loginReducer = (state = initState, action) => {
    // const newState = {...state}
    switch (action.type) {        
        case 'USER_LOGGED_IN':
            return {
                ...state,
                isLogin: true,
                token: action.payload 
            }
            case 'USER_LOGGED_OUT':
            
            break
        default:
            break
    }
    return state
}




export {loginReducer}