import { ADD_POST, EDIT_POST, ADD_COMMENT } from "./actionType";
import { FILTER_POST } from "./actionType";

const initialState = {
  posts: [],
  copy: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      alert("post added");
      return {
        ...state,
        posts: [...state.posts, action.payload],
        copy: [...state.posts, action.payload]
      };
    }
    case FILTER_POST: {
      let filter = state.posts.filter(ele => {
        return ele.catagory === action.payload;
      });
      return {
        ...state,
        copy: [...filter]
      };
    }

    case EDIT_POST: {
      alert("done !");
      let filter = state.posts.filter(
        ele => ele.title !== action.payload.title
      );
      return {
        ...state,
        post: [...filter, action.payload],
        copy: [...filter, action.payload]
      };
    }

    case ADD_COMMENT: {
      let filter = state.posts.filter(
        ele => ele.title !== action.payload.title
      );
      let target = state.posts.find(ele => ele.title == action.payload.title);
      target.comments = [...target.comments, action.payload.text];
      alert("comment added");
      return {
        ...state,
        posts: [...filter, target],
        copy: [...filter, target]
      };
    }

    default:
      return state;
  }
};
export default postReducer;
