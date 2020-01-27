/** @format */

export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const sortUsers = (data, typeSort) => {
  return {
    type: "SORT_USERS",
    typeSort: typeSort,
    data: data
  };
};

export const deleteUser = id => {
  return {
    type: "DELETE_USER",
    id: id
  };
};

export const updateUserData = (newUser, id) => {
  return {
    type: "UPDATE_USER",
    id: id,
    newUser: newUser
  };
};
