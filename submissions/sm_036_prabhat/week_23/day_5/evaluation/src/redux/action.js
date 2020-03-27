import axios from 'axios';
export const SEND_TOKEN = 'SEND_TOKEN';
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_PAGE = 'CHANGE_PAGE'


export const login = payload => {
    const requestParam = {
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: payload
    }
    return dispatch => {
        return axios(requestParam)
            .then(res => {
                const data = res.data;
                console.log('aaaa', data)
                return dispatch(sendToken(data))
            })
            .catch(error => console.log(error))
    };
};

export const register = payload => {
    const requestParam = {
        method: 'post',
        url: 'http://localhost:8080/auth/register',
        data: payload
    }
    return dispatch => {
        return axios(requestParam)
            .then(res => {
                const data = res;
                console.log(data);
            })
            .catch(error => console.log(error))
    };
};

export const sendToken = (payload) => ({
    type: SEND_TOKEN,
    payload
})

export const addEmployee = (payload) => ({
    type: ADD_EMPLOYEE,
    payload
})

export const deleteEmployee = (payload) => ({
    type: DELETE_EMPLOYEE,
    payload
})

export const changePage = (payload) => ({
    type: CHANGE_PAGE,
    payload
})