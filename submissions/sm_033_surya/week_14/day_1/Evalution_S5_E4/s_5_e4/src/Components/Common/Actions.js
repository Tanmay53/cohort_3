const ADD = "ADD"
const MANU = "MANU"
const PRICE = "PRICE"
const UPDATE = "UPDATE"
const CHECK = "CHECK"
const LOGOUT = "LOGOUT"
const FILLTER ="FILLTER"


const add = (temp) => {
    return {
        type: ADD,
        playload: {
            data: temp
        }
    }
}
const update = (temp, id) => {
    return {
        type: UPDATE,
        playload: {
            id: id,
            data: temp
        }
    }
}
const manu = (value) => {
    return {
        type: MANU,
        isSorted: value
    }
}
const priceSort = (value) => {
    return {
        type: PRICE,
        isSorted: value
    }
}

const logincheck = (value) => {
    return {
        type: CHECK,
        islogin: value
    }
}
const logoutcheck = (value) => {
    return {
        type: LOGOUT,
        islogin: value
    }
}
const fillter =(value) =>{
    return {
        type:FILLTER,
        value :Number(value)
    }
}
export { add, manu, priceSort, update, logincheck, logoutcheck ,fillter}