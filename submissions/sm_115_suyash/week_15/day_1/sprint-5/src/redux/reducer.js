import { ADD_TOPIC, DELETE_TOPIC, UPDATE_TOPIC, IS_AUTH } from "./action";

let initialState = {
  topicList: [],
  isAuth: false,
  userName: "admin",
  userPass: "admin"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return {
        ...state,
        topicList: [...state.topicList, action.payload]
      };
    case DELETE_TOPIC:
      return {
        ...state,
        topicList: state.topicList.filter((item, index) => {
          if (index != action.payload) {
            return item;
          }
        })
      };
    case UPDATE_TOPIC:
      console.log("reducer updating", action.id, action.payload);
      return {
        ...state,
        topicList: state.topicList.map((item, index) => {
          if (index == action.id) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    case IS_AUTH:
      if (
        state.userName == action.payload.userName &&
        state.userPass == action.payload.userPass
      ) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        alert("Fill input properly...");
      }
    default:
      return state;
  }
};

export default reducer;
