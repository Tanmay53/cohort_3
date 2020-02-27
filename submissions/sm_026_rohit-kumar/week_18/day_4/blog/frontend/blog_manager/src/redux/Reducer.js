const init_user_state = {
    status: 'Login',
    user_id: '',
    token: ''
}

const loginReducer = (state = init_user_state, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                 status: action.payload.loginStatus,
                 user_id: action.payload.data.user_id,
                 token: action.payload.data.token
                }
        case 'USER_LOGOUT':
            return {...state, 
                    status: action.payload.loginStatus,
                    user_id: undefined
                 }
    }
    return state
}

export {loginReducer}