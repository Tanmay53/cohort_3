import { act } from "react-dom/test-utils"


const INC_COUNTER = "INC_COUNTER"
const DEC_COUNTER = "DEC_COUNTER"
const Update = 'Update'
const Multiply = 'Multiply'
const Divide = 'Divide'
const Mod = 'Mod'

const initial = {
    count:0,
    value:0,
    name:'sagar'
}


const counter = (state = initial,action) =>{
    console.log('inside counter state',state.value,state.count)
    switch(action.type){
        case INC_COUNTER:
            return {
                ...state,
                count : state.value + state.count,
            }
        case DEC_COUNTER:
            return {
                ...state,
                count : state.count - state.value, 
            }
        case Update:
            console.log('inside update')
            return {
                ...state,
                value:action.value
            }
        case Multiply:
            return{
                ...state,
                count: state.count * state.value
            }
        case Divide:
            return {
                ...state,
                count: state.count / state.value
            }
        case Mod:
            return {
                ...state,
                count: state.count % state.value
            }
        default :
            return state
    }
}

export default counter