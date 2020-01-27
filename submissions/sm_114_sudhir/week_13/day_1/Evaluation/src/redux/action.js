import { AUTH, ADD_USER, DELETE_USER, SORT_USER, EDIT_USER } from './type'


export const onSubmit = (payload) => {
    return {
        type : AUTH,
        payload,
    }
}

export const addUser = (payload) => {
    return {
        type : ADD_USER,
        payload
    }
}

export const deleteUser = (payload) => {
     return {
         type : DELETE_USER,
         payload
     }
}

export const sortUser = (payload) => ({
    type: SORT_USER,
    payload
})

export const editUser = (payload) => ({
    type: EDIT_USER,
    payload
})
