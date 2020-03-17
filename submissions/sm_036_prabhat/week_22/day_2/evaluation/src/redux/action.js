import axios from 'axios';
export const SEND_TOKEN = 'SEND_TOKEN';
export const ADD_ARTIST = "ADD_ARTIST";
export const ADD_ALBUM = "ADD_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const LOGIN_USER = 'LOGIN_USER';


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

export const addArtist = (payload) => ({
    type: ADD_ARTIST,
    payload
})

export const addAlbum = (payload) => ({
    type: ADD_ALBUM,
    payload
})

export const deleteAlbum = (payload) => ({
    type: DELETE_ALBUM,
    payload
})

export const updateAlbum = (payload) => ({
    type: UPDATE_ALBUM,
    payload
})
