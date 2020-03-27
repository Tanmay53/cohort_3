import axios from 'axios'

export const ADD_ARTIST = 'ADD_ARTIST'
export const ADD_ALBUM = 'ADD_ALBUM'
export const EDIT = 'EDIT'
export const DELETE = 'DELETE'
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS_LOGIN = 'FETCH_SUCCESS_LOGIN'
export const FETCH_SUCCESS_REGISTER = 'FETCH_SUCCESS_REGISTER'

export const addArtist = (payload) => ({
    type: ADD_ARTIST,
    payload
})

export const addAlbum = (payload) => ({
    type: ADD_ALBUM,
    payload
})
export const edit = (payload) => ({
    type: EDIT,
    payload
})

export const del = (payload) => ({
    type: DELETE,
    payload
})

export const fetchRequest = query => {
    return {
        type: FETCH_REQUEST,
        query: query || ""
    };
}
export const fetchSuccessLogin = payload => {
    return {
        type: FETCH_SUCCESS_LOGIN,
        payload
    }
}
export const fetchSuccessRegister = payload => {
    return {
        type: FETCH_SUCCESS_REGISTER,
        payload
    }
}
export const fetchLogin = (query = null) => {
    return dispatch => {
        dispatch(fetchRequest);
        return axios
            .post('http://localhost:8080/auth/login', query)
            .then(res => {
                console.log("login res", res.data);
                if (res.data.error === false) {
                    alert('Login Successfull!!!')
                }
                else if (res.data.error === true) {
                    alert('Invalid login creadentials')
                }
                else {
                    alert('There is something wrong with the internet')
                };
                return dispatch(fetchSuccessLogin(res.data));
            })
            .catch(err => console.log('Error is:',err));
    };
};

export const fetchRegister = (query = null) => {
    return dispatch => {
        dispatch(fetchRequest);
        return axios
            .post('http://localhost:8080/auth/register', query)
            .then(res => {
                console.log("res success", res.data);
                if (res.data.error === false) {
                    alert('Registration Successfull!!!')
                }
                else if (res.data.error === true) {
                    alert('User already exists')
                }
                else {
                    alert('There is something wrong with the internet')
                };
                return dispatch(fetchSuccessRegister(res.data));
            })
            .catch(err => console.log('Error is:',err));
    };
};