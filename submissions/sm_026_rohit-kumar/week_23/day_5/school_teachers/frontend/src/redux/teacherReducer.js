const init_teacher_state = {
    teachers: []
}

const teacherReducer = (state = init_teacher_state, action) => {
    switch(action.type) {
        case 'LOAD_TEACHER':
            return {
                ...state,
                teachers: [...state.teachers, ...action.payload] 
                }
        
    }
    return state
}

export {teacherReducer}