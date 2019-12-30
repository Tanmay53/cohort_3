export const AUTH = "AUTH";
export const ADD_STAFF = "ADD_STAFF";
export const LOGOUT = "LOGOUT";
export const auth = (username, password) => {
    return {
        type: AUTH,
        payload: { username: username, password: password }
    };
};

export const addStaff = content => {
    return {
        type: ADD_STAFF,
        payload: content
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
