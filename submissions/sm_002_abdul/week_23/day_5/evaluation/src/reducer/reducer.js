import {LOGIN} from "../action/action"

export const reducer = (state,action) =>{ //reducer which maintains login state
  switch (action.type) {
    case LOGIN :
      return {
        login : action.payload.login
      }

    default :
      return state
  }
}