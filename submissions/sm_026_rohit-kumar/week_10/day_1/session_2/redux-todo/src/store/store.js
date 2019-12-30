import {createStore} from 'redux'

const initState = {
    todo: []
}

const reducer = (state = initState, action) => {
    
    const newState = {...state}
    switch(action.type) {
        case 'TODO_ADD':
            newState.todo.push(action.payload)
        break
        case 'TODO_DEL':
            newState.todo = newState.todo.filter((item) => {
                                return item.task !== action.payload
                            })
        break
        case 'TODO_TOGGLE':
            newState.todo.map((item) => {
                if(item.task === action.payload) {
                    item.completed = !item.completed
                }
                return item
            })
        break
    }

    return newState
}   

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

const todoAdd = (task) => {
    return {type: 'TODO_ADD', payload: {task: task, completed: false}}
}

const todoDelete = (task) => {
    return {type: 'TODO_DEL', payload: task}
}

const todoToggle = (task) => {
    return {type: 'TODO_TOGGLE', payload: task}
}

export {store, todoAdd, todoDelete, todoToggle}