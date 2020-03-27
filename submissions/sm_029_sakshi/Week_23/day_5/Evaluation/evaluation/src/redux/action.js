import axios from 'axios';
export const TOKEN = 'TOKEN';
export const ADD_DEPATMENT = "ADD_DEPATMENT";
export const ADD_DATA = "ADD_DATA";
export const CHANGE_PAGE_NO = "CHANGE_PAGE_NO";
export const SORTBYSALARY="SORTBYSALARY"


export const addDepartment = (payload) => ({
    type: ADD_DEPATMENT,
    payload
})

export const addData = (payload) => ({
    type: ADD_DATA,
    payload
})


export const changePage = payload => ({
    type: CHANGE_PAGE_NO,
    payload
  })
export const sortbysalary=(payload)=>({
    type: SORTBYSALARY,
    payload
})

export const login = payload => {
    const request = {
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: payload
    }
    return dispatch => {
        return axios(request)
            .then(res => {
                const data = res.data;
                alert("Login successful")
                return dispatch(Token(data))
            })
            .catch(error => console.log(error))
    };
};

export const register = payload => {
    const request = {
        method: 'post',
        url: 'http://localhost:8080/auth/register',
        data: payload
    }
    return dispatch => {
        return axios(request)
        .then(response => {
            const data = response;
            
        })
        .catch(error => console.log(error))
    };
};

export const Token = (payload) => ({
    type: TOKEN,
    payload
})


