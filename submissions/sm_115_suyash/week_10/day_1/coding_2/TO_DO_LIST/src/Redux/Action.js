export const addItem = item => {
  return {
    type: "ADDITEM",
    payload: item
  };
};

export const completedTask = id => {
  console.log("clicked");
  return {
    type: "COMPLETED",
    payload: id
  };
};
