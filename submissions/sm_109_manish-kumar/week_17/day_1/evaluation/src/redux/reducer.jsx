import {BOOK} from "./action"
import initialState from "./initialState"

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BOOK:
            return{
                ...state,
                state: state.filter(ele => (ele.id != action.id))
            }
    }
}

export default reducer;