const init_user_state = {
    isLoggedIn: false,
    menuLabel: 'Login',
    showRegisterButton: true,
    data: {}
}

const loginReducer = (state = init_user_state, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                    isLoggedIn: true,
                    menuLabel: 'Logout',
                    showRegisterButton: false,
                    data: action.payload.data
                }
        case 'USER_LOGOUT':
            return {...state, 
                        isLoggedIn: false,
                        menuLabel: 'Login',
                        showRegisterButton: true,
                        data: {}
                    }
    }
    return state
}

const init_tasklist = {
    tasklists: []
}

const tasklistReducer = (state=init_tasklist, action) => {
    switch (action.type) {
        case 'ADD_TASKLIST':
            return {
                ...state,
                tasklists: [...state.tasklists, action.payload]
            }
        case 'DELETE_TASKLIST':
            return {
                ...state,
                tasklists: state.tasklists.filter((item) => {
                    if(item.tasklist_id !== action.payload)
                        return item
                })
            }

        case 'UPDATE_NAME':
            return {
                ...state,
                tasklists: state.tasklists.map((item) => {
                    if(item.tasklist_id === action.payload.tasklist_id) {
                        return {...item, name: action.payload.name}
                    }
                    return item
                })
            }
        case 'UPDATE_DESC':
            return {
                ...state,
                tasklists: state.tasklists.map((item) => {
                    if(item.tasklist_id === action.payload.tasklist_id) {
                        return {...item, desc: action.payload.desc}
                    }
                    return item
                })
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasklists: state.tasklists.map((item) => {
                    if(item.tasklist_id === action.payload.tasklist_id) {
                        return {...item, 
                            tasks: [...item.tasks, {name: action.payload.name, uuid: action.payload.uuid}]
                        }
                    }
                    return item
                })
            }
        case 'DELETE_TASK':
            // console.log(action.payload)
            return {
                ...state,
                tasklists: state.tasklists.map((item) => {
                    if(item.tasklist_id === action.payload.tasklist_id) {
                        return {...item, 
                            tasks: item.tasks.filter((task) => {
                                if (task.uuid !== action.payload.uuid)
                                    return task
                            })
                        }
                    }
                    return item
                })                
            }
    }
    return {...state}
}

export {loginReducer, tasklistReducer}