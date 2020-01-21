import {combineReducers} from 'redux'

export const USER_LOGIN = 'USER_LOGIN'
export const ADD_VEHICLE = 'ADD_VEHICLE'
export const SORT_ASC_SALES = 'SORT_ASC_SALES'
export const SORT_DESC_SALES = 'SORT_DESC_SALES'
export const DEL_VEHICLE = 'DEL_VEHICLE'
export const EDIT_VEHICLE = 'EDIT_VEHICLE'
export const SORT_ASC_MANU = 'SORT_ASC_MANU'
export const SORT_DESC_MANU = 'SORT_DESC_MANU'
export const INFO_VEHICLE = 'INFO_VEHICLE'

const initialLoginState = {
    username: 'admin',
    password: 'admin',
    isLoggedIn: false
}

const initialVehicleState = {
    vehicle: []
}

const loginReducer = (state=initialLoginState, action)=> {
    const prevState = {...state}
    console.log('in login reducer', action)
    switch(action.type) {
        case USER_LOGIN:
            if(action.payload.state.username===prevState.username && action.payload.state.password===prevState.password) {
                prevState.isLoggedIn = true
                action.payload.props.history.push('/')
            }
            break
        default:
            break
    }
    return prevState
}

const vehicleReducer = (state=initialVehicleState, action) => {
    const prevState = {...state}
    switch(action.type) {
        case ADD_VEHICLE:
            prevState.vehicle = prevState.vehicle.concat(action.payload)
            return prevState
        case SORT_ASC_SALES:
            prevState.vehicle = prevState.vehicle.sort((a, b) => {
                return a.sales - b.sales
            })
            break
        case SORT_DESC_SALES:
            prevState.vehicle = prevState.vehicle.sort((a, b) => {
                return b.sales - a.sales
            })
            break
        case SORT_ASC_MANU:
            prevState.vehicle = prevState.vehicle.sort((a, b) => {
                var nameA = a.manufacturer.toUpperCase();
                var nameB = b.manufacturer.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
              })
            break
        case SORT_DESC_MANU:
            prevState.vehicle = prevState.vehicle.sort((a, b) => {
                var nameA = a.manufacturer.toUpperCase();
                var nameB = b.manufacturer.toUpperCase();
                if (nameA > nameB) {
                  return -1;
                }
                if (nameA < nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
              })
        break
        case DEL_VEHICLE:
            console.log('user delete called')
            console.log(action.payload)
            
            prevState.vehicle = prevState.vehicle.filter((item) => item.id!==action.payload)
            console.log(prevState)
            return prevState
        
        case EDIT_VEHICLE:
            console.log('edit emp called')
            console.log(action.payload)
            console.log(prevState.vehicle)

            prevState.vehicle = prevState.vehicle.map((item)=> item.id==action.payload.id ? action.payload : item)
            console.log(prevState.vehicle)
            return prevState
        case INFO_VEHICLE:
            prevState.vehicle = prevState.vehicle.map((item)=> item.id==action.payload.id ? action.payload : item)
            return prevState
        default:
            break
    }
    return prevState
}

const rootReducer = combineReducers({
    login: loginReducer,
    vehicle: vehicleReducer
})

export default rootReducer