import {combineReducers} from 'redux';

let initialStore = {
    loginCredentials: {username: "admin", password: "admin"},
    isLogged: false
};

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case "VALIDATE":
            return {...state, isLogged:(state.loginCredentials.username === action.data.username && state.loginCredentials.password === action.data.password?true:false)};
        default:
            return state;
    }
};

export default reducer;