import { createStore } from 'redux';
import rootReducer from './reducer';

const app_store = createStore(rootReducer);

export default app_store;
