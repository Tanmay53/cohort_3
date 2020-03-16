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

const add_tasklist = (data) => {
    return {
        type: 'ADD_TASKLIST',
        payload: data
    }
}

const delete_tasklist = (tasklist_id) => {
    return {
        type: 'DELETE_TASKLIST',
        payload: tasklist_id
    }
}

const clear_tasklist = () => {
    return {
        type: 'CLEAR_TASKLIST'
    }
}

const update_name = (data) => {
    return {
        type: 'UPDATE_NAME',
        payload: data
    }
}


const update_desc = (data) => {
    return {
        type: 'UPDATE_DESC',
        payload: data
    }
}

const add_task = (data) => {
    return {
        type: 'ADD_TASK',
        payload: data
    }
}

const delete_task = (data) => {
    return {
        type: 'DELETE_TASK',
        payload: data
    }
}


export {user_login, user_logout, add_tasklist, update_desc, 
    update_name, add_task, delete_task, delete_tasklist,
    clear_tasklist}