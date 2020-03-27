import {INCREMENT,DECREMENT} from './action'

//reducer
export const reducer = (state,action) =>{
  console.log(state)
  switch (action.type){

    case INCREMENT :
      return {
        count : state.count+1
      }

    case DECREMENT :
      return {
        count : state.count-1
      }

    default:
      return state
  }
}