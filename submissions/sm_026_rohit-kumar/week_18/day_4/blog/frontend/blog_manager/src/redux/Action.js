const user_login = (data) => {
    return {
        type: 'USER_LOGIN',
        payload: {'loginStatus':'Logout', 'data': data}
    }
}

const user_logout = () => {
    return {
        type: 'USER_LOGOUT',
        payload: {'loginStatus':'Login'}
    }
}

export {user_login, user_logout}