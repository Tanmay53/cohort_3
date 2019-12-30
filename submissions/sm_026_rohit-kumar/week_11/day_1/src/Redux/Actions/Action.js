
const userLoginAction = (state, props) => {
    return {
        type: 'USER_LOGIN',
        payload: {state, props}
    }
}


const sortStaffAsc = () => {
    return {
        type: 'SORT_ASC'
    }
}

const sortStaffDesc = () => {
    return {
        type: 'SORT_DESC'
    }
}

const deleteUserAction = (index) => {
    return {
        type: 'USER_DELETE',
        payload: index
    }
}

const userLogoutAction = (obj) => {
    return {
        type: 'USER_LOGOUT'
    }
}

const addStaff = (obj) => {
    return {
        type: 'ADD_STAFF',
        payload: obj
    }
}


export {userLoginAction, addStaff, sortStaffAsc, sortStaffDesc, deleteUserAction}