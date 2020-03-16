export const SIGNIN = 'SIGNIN'
export const SIGNOUT = 'SIGNOUT'

export const login = (items) => ({
    type: SIGNIN,
    payload: items
})

export const signout = (items) => ({
    type: SIGNOUT,
    payload: items
})

