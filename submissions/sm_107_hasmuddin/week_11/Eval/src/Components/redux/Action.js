const addData = customer => {
  return {
    type: "ADD_DATA",
    payload: customer
  };
};

export default addData;
