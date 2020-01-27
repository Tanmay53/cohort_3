export const ADD_TODO = "ADD_TODO";

const addTodo = item => {
    return {
      type: ADD_TODO,
      payload: item
    };
  };

export {addTodo}  