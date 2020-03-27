import { combineReducers } from "redux"
import { AuthReducer } from "../Redux/Auth/AuthReducer"
import { TeacherReducer } from "../Redux/Teachers/TeacherReducer"
import { RegisterReducer } from "../Redux/Auth/RegisterReducer"

export const RootReducer = combineReducers({
    "Auth": AuthReducer,
    "Teachers": TeacherReducer,
    "Register": RegisterReducer
})  