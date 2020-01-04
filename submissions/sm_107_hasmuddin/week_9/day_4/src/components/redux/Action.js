export const AddTodo = data => {
  return {
    type: "ADD_TODO",
    data: data
  };
};
export const Complete = id => {
  return {
    type: "COMPLETE",
    id: id
  };
};

export const Delete = id => {
  return {
    type: "DELETE",
    id: id
  };
};
