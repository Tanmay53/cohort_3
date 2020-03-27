import { combineReducers } from "redux";
import auth from "./auth";
import location from "./location";
import bus from "./bus";

export default combineReducers({ auth, location, bus });
