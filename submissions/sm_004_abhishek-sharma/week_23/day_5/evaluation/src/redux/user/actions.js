import { ADD_PRODUCT, EMPTY_DATA, CHANGE_PAGE } from "./actionTypes"

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

export const empty = () => ({
    type: EMPTY_DATA
})

export const changePage = (payload) => ({
    type: CHANGE_PAGE,
    payload
})

