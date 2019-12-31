import { combineReducers } from 'redux';
import staffReducers from './staffReducers';
import loginReducer from './loginReducers';
export default combineReducers({
  staff: staffReducers,
  login: loginReducer
});
