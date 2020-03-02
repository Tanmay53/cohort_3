import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
  homeReducer,
  authorReducer,
  categoryReducer
});
