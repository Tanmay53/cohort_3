import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
  authReducer,
  productReducer,
  categoryReducer
});
