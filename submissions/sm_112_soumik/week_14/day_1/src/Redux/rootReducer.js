import { combineReducers } from "redux";
import carReducer from "./carReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: carReducer
});

export default rootReducer;
