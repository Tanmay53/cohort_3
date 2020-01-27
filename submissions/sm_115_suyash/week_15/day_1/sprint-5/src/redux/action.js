export const ADD_TOPIC = "ADD_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const IS_AUTH = "IS_AUTH";

export const addTopic = payload => ({
  type: ADD_TOPIC,
  payload
});

export const deleteTopic = payload => ({
  type: DELETE_TOPIC,
  payload
});

export const updateTopic = (payload, id) => {
  //   console.log("id>>>>at action", id);
  return {
    type: UPDATE_TOPIC,
    payload: payload,
    id: id
  };
};

export const isAuth = payload => ({
  type: IS_AUTH,
  payload
});
