import {combineReducers} from 'redux'

const ADD_TODO="ADD_TODO"
const TOGGLE_ITEM="TOGGLE_ITEM"
const REMOVE_ITEM="REMOVE_ITEM"
const PENDING_COUNT="PENDING_COUNT"

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_ITEM:
                const updatedItem=action.payload;
                console.log(updatedItem)
                const newState = [...state]
                const newState1= state.map(item=>
                    // console.log('item : ', item.id,updatedItem.id),
                    item.id === updatedItem.id ? item.isCompleted = true : item.isCompleted
                    );
                                
             return newState;
        case REMOVE_ITEM:
                const removeItem=action.payload
                console.log(removeItem)
                const removeditemm=state.filter(item=> item.id !== removeItem);
                console.log(removeditemm)
                return removeditemm

        case PENDING_COUNT:
                        return{
                            ...state,
                            countOfNonCompletedTasks: state.todo.filter(e => e.isCompleted === false).length
                        }

         default:
             return state;
    }
}

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state + 1;
        default:
            return state;
    }
};

const reducer = combineReducers({
    todo: todoReducer,
    count: countReducer
});

export  default reducer
