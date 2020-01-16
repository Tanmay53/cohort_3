const ADD = "ADD"
const DEL = "DEL"
const TOGGLE = "TOGGLE"

const add = (item, id) => {
    console.log(item)
    return {
        type: ADD,
        playload: {
            item: item,
            completed: false,
            id: id
        }
    }
}
const del = (id, check) => {
    return {
        type: DEL,
        id: id,
        completed: check
    }
}

const tog = (id, check) => {
    return {
        type: TOGGLE,
        id: id,
        completed: check
    }
}
export { add, del, tog }
