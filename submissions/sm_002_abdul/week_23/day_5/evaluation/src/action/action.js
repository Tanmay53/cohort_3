export const LOGIN = "LOGIN"

export const login = (item) =>({  //action creator of login state
  type : LOGIN,
  payload : {
    login : item
  }
})