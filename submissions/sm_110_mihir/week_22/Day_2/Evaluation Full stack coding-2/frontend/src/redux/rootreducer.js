import auth_reducer from "./auth/auth_reducer";
import prod_reducer from "./prod/prod_reducer";
import { combineReducers } from "redux";

export default combineReducers({ auth_reducer, prod_reducer });
