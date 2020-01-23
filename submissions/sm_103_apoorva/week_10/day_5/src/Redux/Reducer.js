import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
  } from "./Action";
import SignIn from "../SignIn";

  
  const initStore = {
    isLoading: false,
    query: "",
    error: ""
  };

  const initSignin = {
    isLoading: false,
    query: "",
    error: ""
  };
  
export const Reducer = (state = initStore, action) => {
    console.log("reducer called");
    switch (action.type) {
      case FETCH_REQUEST:
        console.log("reducer github request called");
        return {
          ...state,
          isLoading: true,
          query: action.query
        };
      case FETCH_SUCCESS:
        console.log("reducer github success called", action);
  
        return {
          isLoading: false,
          error: state.error
        };
      case FETCH_FAILURE:
        console.log("reducer github failure called");
        alert("Something wrong")
        return {
          isLoading: false,
          error: action.error
        };
      default:
        console.log("reducer default called");
        return state;
    }
  };

export const SignInReducer = (state = initSignin, action) => {
    console.log("reducer called");
    switch (action.type) {
      case FETCH_REQUEST:
        console.log("reducer github request called");
        return {
          ...state,
          isLoading: true,
          query: action.query
        };
      case FETCH_SUCCESS:
        console.log("reducer github success called", action);
  
        return {
          isLoading: false,
          error: state.error
        };
      case FETCH_FAILURE:
        console.log("reducer github failure called");
        alert("Something wrong")
        return {
          isLoading: false,
          error: action.error
        };
      default:
        console.log("reducer default called");
        return state;
    }
  };
