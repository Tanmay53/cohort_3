import {createStore} from 'redux';
import reducer from './Reducer';
let initialState = {
    todo:[]
};

const store = createStore(reducer, initialState);

export default store;