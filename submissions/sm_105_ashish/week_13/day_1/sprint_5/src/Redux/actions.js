export const LOG_IN = "LOG_IN"
export const ADD_STAFF = "ADD_STAFF"
export const LOG_OUT = "LOG_OUT"
export const DELETE_USER  = "DELETE_USER"
export const UPDATE_USER = "UPDATE_USER"



export const loggingIn = () => {
    return {
        type : LOG_IN,
    }
}

export const addNewStaff = (formData) => {
    return {
        type :ADD_STAFF,
        payload : formData
    }
}
export const loggingOut = () => {
    return {
        type : LOG_OUT,
    }
}

export const deletingUser = (email) => {
    return {
        type : DELETE_USER,
        payload :email
    }
}

export const updatingUser = (formData) => {
    return {
        type : UPDATE_USER,
        payload : formData
    }
}