export const REMOVE_TODO = "REMOVE_TODO";

const removeTodo = item => {
  return {
    type: REMOVE_TODO,
    payload: item
  };
};

export {removeTodo };