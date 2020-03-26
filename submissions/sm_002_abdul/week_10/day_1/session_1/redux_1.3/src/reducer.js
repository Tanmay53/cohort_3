import {MULTIPLY,DIVIDE,REMAINDER} from './action'

//reducer
export const reducer = (state,action) =>{
  
  switch (action.type){

    case MULTIPLY :
      return {
        count : state.count*10
      }

    case DIVIDE :
      return {
        count : state.count/10
      }

    case REMAINDER :
      return {
        count : state.count%10
      }

    default:
      return state
  }
}