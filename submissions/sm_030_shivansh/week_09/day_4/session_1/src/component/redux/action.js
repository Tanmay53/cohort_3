const add = (item) => {

    return {
        type: "ADD",
        payload: item
    }
}

const toggleDone = (item) => {

    return {
        type: "TOGGLE_DONE",
        payload: item
    }
}

const deleteItem = (item) => {
    return {
        type: "DELETE_ITEM",
        payload: item
    }
}

const showCompleted = (item) => {
    return {
        type: "SHOW_COMPLETED",
        payload: item
    }
}

export { add, toggleDone, deleteItem, showCompleted } 