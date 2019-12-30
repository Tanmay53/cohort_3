const initState = {
    todo: []
}


const reducer = (state = initState, action) => {
    
    const newState = {...state}
    switch(action.type) {
        case 'TODO_ADD':
            newState.todo = newState.todo.concat(action.payload)
        break
        case 'TODO_DEL':
            newState.todo = newState.todo.filter((item) => {
                                return item.task !== action.payload
                            })
        break
        case 'TODO_TOGGLE':
            newState.todo = newState.todo.map((item) => {
                if(item.task === action.payload) {
                    item.completed = !item.completed
                }
                return item
            })
        break
    }

    return newState
}   


export default reducer