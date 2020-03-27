import {LOGIN} from "../action/action"

export const reducer = (state,action) =>{
  switch (action.type) {
    case LOGIN :
      return {
        login : action.payload.login
      }

    default :
      return state
  }
}