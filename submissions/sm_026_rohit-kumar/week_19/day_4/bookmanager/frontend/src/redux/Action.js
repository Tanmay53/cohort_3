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

/* const add_author = (data) => {
    return {
        type: 'ADD_AUTHOR',
        payload: data
    }
}

const add_publisher = (data) => {
    return {
        type: 'ADD_PUBLISHER',
        payload: data
    }
}

const add_category = (data) => {
    return {
        type: 'ADD_CATEGORY',
        payload: data
    }
}


const update_author = (data) => {
    return {
        type: 'UPDATE_AUTHOR',
        payload: data
    }
}

const update_publisher = (data) => {
    return {
        type: 'UPDATE_PUBLISHER',
        payload: data
    }
}

const update_category = (data) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: data
    }
}

const delete_author = (data) => {
    return {
        type: 'DELETE_AUTHOR',
        payload: data
    }
}

const delete_publisher = (data) => {
    return {
        type: 'DELETE_PUBLISHER',
        payload: data
    }
}

const delete_category = (data) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: data
    }
} */






export {user_login, user_logout}

/* add_author, add_category, add_publisher,
update_author, update_category, update_publisher,
delete_author, delete_category, delete_publisher */