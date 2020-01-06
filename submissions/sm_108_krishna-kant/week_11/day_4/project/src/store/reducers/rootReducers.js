import { combineReducers } from 'redux';
import planTrip from './planTrip';
import orders from './orders';
export default combineReducers({
  createTrip: planTrip,
  order: orders
});
