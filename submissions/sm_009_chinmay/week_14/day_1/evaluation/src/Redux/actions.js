
const userLogin = (state, props) => {
    return {
        type: 'USER_LOGIN',
        payload: {
            state,
            props
         }
    }
}
const addVehicle = (obj) => {
    return {
        type: 'ADD_VEHICLE',
        payload: obj
    }
}

const sortAscSales = () => {
    return {
        type: 'SORT_ASC_SALES'
    }
}

const sortDescSales = () => {
    return {
        type: 'SORT_DESC_SALES'
    }
}

const sortAscManu = () => {
    return {
        type: 'SORT_ASC_MANU'
    }
}

const sortDescManu = () => {
    return {
        type: 'SORT_DESC_MANU'
    }
}

const deleteVehicle = (item) => {
    return {
        type: 'DEL_VEHICLE',
        payload: item
    }
}
const editVehicle = (item, id) => {
    return {
        type: 'EDIT_VEHICLE',
        payload: item, id
    }
}

const infoVehicle = (item, id) => {
    return {
        type: 'INFO_VEHICLE',
        payload: item, id
    }
}

export {userLogin, addVehicle, sortAscSales, sortDescSales, sortAscManu, sortDescManu, deleteVehicle, editVehicle, infoVehicle}