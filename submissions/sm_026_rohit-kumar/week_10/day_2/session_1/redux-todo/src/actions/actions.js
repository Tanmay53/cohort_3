
const todoAdd = (task) => {
    return {type: 'TODO_ADD', payload: {task: task, completed: false}}
}

const todoDelete = (task) => {
    return {type: 'TODO_DEL', payload: task}
}

const todoToggle = (task) => {
    return {type: 'TODO_TOGGLE', payload: task}
}


export {todoAdd, todoDelete, todoToggle}