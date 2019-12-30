import { combineReducers } from "redux"
import {userLoginAction} from '../Actions/Action'

const initLoginState = {
    username: 'rohit',
    password: '1234',
    isLoggedIn: false
}

const initStaff = {
    staff: []
}

const staffReducer = (state = initStaff, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'ADD_STAFF':
            newState.staff = newState.staff.concat(action.payload)
            break
        case 'SORT_ASC':
            newState.staff = newState.staff.sort((a, b) => {
                return a.sales - b.sales
            }) 
            break
        case 'SORT_DESC':
            newState.staff = newState.staff.sort((a, b) => {
                return b.sales - a.sales
            }) 
            break
        case 'USER_DELETE':
            
            break
    }
    return newState
}

const authReducer = (state = initLoginState, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'USER_LOGIN':
            if(action.payload.state.username == newState.username && action.payload.state.password == newState.password) {
                newState.isLoggedIn = true
                action.payload.props.history.push('/')
            }
        break
        case 'USER_LOGOUT':
        break
    }

    return newState
} 


const reducer = combineReducers({
    login: authReducer,
    staff: staffReducer
})


export {reducer}