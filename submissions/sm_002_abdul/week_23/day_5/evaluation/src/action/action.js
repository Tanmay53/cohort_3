export const LOGIN = "LOGIN"

export const login = (item) =>({
  type : LOGIN,
  payload : {
    login : item
  }
})