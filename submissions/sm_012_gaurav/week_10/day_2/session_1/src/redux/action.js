export const addTodo = (data) => ({type: "ADD_TODO", value: data});
export const toggleTodo = (data) => ({type: "TOGGLE_TODO", idx: data});
export const deleteTodo = (data) => ({type: "DELETE_TODO", idx: data});
export const countTodo = () => ({type: "COUNT_TODO"});