// import { act } from "react-dom/test-utils"

const INC_COUNTER = 'INC_COUNTER'; // This is the type of the action

const DEC_COUNTER = 'DEC_COUNTER'; // This is the type of the action
const MULTIPLY_COUNTER = 'MULTIPLY_COUNTER';
const Divide = 'Divide';
const Mod = 'Mod';
const Custom = 'Custom';
const Input = 'Input';

const initialState = {
	count: 0,
	val: 0
};

const counter = (state = initialState, action) => {

    console.log("in reducer, counter state is ", state.count, state.val)
	switch (action.type) {

		case INC_COUNTER:
            let inc=  Number(state.count) + Number(state.val)
			return {
                ...state,
				count:inc
			};

		case DEC_COUNTER:
			return {
                ...state,
				count: state.count - state.val
			};

		case MULTIPLY_COUNTER:
			return {
                ...state,
				count: state.count * state.val
			};

		case Divide:
			return {
                ...state,
				count: state.count / state.val
			};

		case Mod:
			return {
                ...state,
				count: state.count % state.val
			};

		case Input:
            // let inc=  Number(state.count) + Number(state.val)

			return {
                ...state,
                count:0,
				val: action.val
			};

		case Custom :
            if(state.val % 2 === 0 )
            {
                return {count:state.val + 2}
            }
            else{
                return {
                    count:state.va1 + 1
                 }
            }
	

		default:
			return state;
	}
};

export default counter;
