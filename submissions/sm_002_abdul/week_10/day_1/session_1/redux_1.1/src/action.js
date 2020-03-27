//Action Types
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT" 

//Action Creator
export const increment = ()=>({
  type : INCREMENT,
  // payload : {
  //   item : item
  // }
})

export const decrement = ()=>({
  type : DECREMENT,
  // payload : {
  //   item : item
  // }
})