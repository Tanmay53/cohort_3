export const LOGIN = 'LOGIN'
export const SIGNOUT = 'SIGNOUT'
export const ORDERS = 'ORDERS'

export const login = (items) => ({
    type: LOGIN,
    payload: items
})

export const signout = (items) => ({
    type: SIGNOUT,
    payload: items
})

export const orders = (items) => ({
    type: ORDERS,
    payload: items
})





