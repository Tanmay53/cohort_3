const initialState = {

    todo: [],
    showCompleted: false
}


const todoReducer = (state = initialState, action) => {
    console.log("reducer", state);
    switch (action.type) {

        case "ADD": {
            if (action.payload === "") {
                alert("Enter Something")
                return state;
            }
            else {
                let item = {
                    name: action.payload,
                    isDone: false
                }

                return {
                    ...state,
                    todo: [...state.todo, item]
                }
            }

        }

        case "DELETE_ITEM":
            return {
                ...state,
                todo: state.todo.filter((ele) => ele.name != action.payload)
            }
        case "TOGGLE_DONE":
            return {
                ...state,
                todo: state.todo.map((ele) => ele.name === action.payload ? { ...ele, isDone: !(ele.isDone) } : ele)
            }
        case "SHOW_COMPLETED":

            return {
                ...state,
                showCompleted: !(state.showCompleted)
            }
        default:
            return state

    }

}


export default todoReducer;