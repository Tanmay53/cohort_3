import React from "react";
import { AUTH, ADD_STAFF, LOGOUT } from "./actions";
const initialState = {
    isLoggedIn: false,
    authentication: { username: "masai-school", password: "secret" },
    staffList: []
};
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case AUTH:
            if (
                action.payload.username === state.authentication.username &&
                action.payload.password === state.authentication.password
            )
                return {
                    ...state,
                    isLoggedIn: true
                };
            break;
        case ADD_STAFF:
            return {
                ...state,
                staffList: [...state.staffList, action.payload]
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}
