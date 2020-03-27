const user_login = (data) => {
    return {
        type: 'USER_LOGIN',
        payload: {'data': data}
    }
}

const user_logout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}


const load_teacher = (data) => {
    return {
        type: 'LOAD_TEACHER',
        payload: data
    }
}



export {user_login, user_logout, load_teacher}