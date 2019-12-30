const initialState = {
    todo: [],
    count: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todo: [...state.todo, action.value]};
        case "TOGGLE_TODO":
            return {...state, todo:state.todo.map((e,i) => i === action.idx?{...e, completed: !e.completed}:{...e})};
        case "DELETE_TODO":
            return {...state, todo:state.todo.filter((e,i) => i !== action.idx)};
        case "COUNT_TODO":
            return {...state, count: state.todo.filter(e => !e.completed).length};
        default:
            return state;
    }
};

export default reducer;