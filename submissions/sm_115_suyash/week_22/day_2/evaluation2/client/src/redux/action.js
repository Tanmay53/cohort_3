import axios from "axios";
import { axiosRequest } from "./loginAction";
export const FETCH_ARTIST_SUCCESS = "FETCH_ARTIST_SUCCESS";
export const FETCH_ARTIST_FAIL = "FETCH_ARTIST_FAIL";
export const FETCH_ARTIST_NAME_SUCCESS = "FETCH_ARTIST_NAME_SUCCESS";
export const FETCH_ARTIST_NAME_FAIL = "FETCH_ARTIST_NAME_FAIL";
export const ADD_NEW_ARTIST_SUCCESS = "ADD_NEW_ARTIST_SUCCESS";
export const ADD_NEW_ARTIST_FAIL = "ADD_NEW_ARTIST_FAIL";
export const DELETE_ARTIST_SUCCESS = "DELETE_ARTIST_SUCCESS";
export const DELETE_ARTIST_FAIL = "DELETE_ARTIST_FAIL";
export const UPDATE_ARTIST_SUCCESS = "UPDATE_ARTIST_SUCCESS";
export const UPDATE_ARTIST_FAIL = "UPDATE_ARTIST_FAIL";

export const fetchArtistSuccess = payload => ({
  type: FETCH_ARTIST_SUCCESS,
  payload
});

export const fetchArtistFail = payload => ({
  type: FETCH_ARTIST_FAIL,
  payload
});

export const fetchArtist = () => dispatch => {
  console.log("fetch artist call <-----");
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/show/data",
    method: "GET"
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetchArtistSuccess(res.data.data));
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const fetchArtistNameSuccess = payload => ({
  type: FETCH_ARTIST_NAME_SUCCESS,
  payload
});

export const fetchArtistNameFail = payload => ({
  type: FETCH_ARTIST_NAME_FAIL,
  payload
});

export const fetchArtistName = () => dispatch => {
  console.log("fetch artist call <-----");
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/show/artist",
    method: "GET"
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetchArtistNameSuccess(res.data.data));
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const addNewArtistSuccess = payload => ({
  type: ADD_NEW_ARTIST_SUCCESS,
  payload
});

export const addNewArtistFail = payload => ({
  type: ADD_NEW_ARTIST_FAIL,
  payload
});

export const addNewArtist = payload => dispatch => {
  console.log(payload, "<----add new");
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/create/albums",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const deleteSuccess = payload => ({
  type: DELETE_ARTIST_SUCCESS,
  payload
});

export const deleteFail = payload => ({
  type: DELETE_ARTIST_FAIL,
  payload
});

export const deleteArtist = payload => dispatch => {
  console.log(payload);
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/delete/album",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const updateSuccess = payload => ({
  type: UPDATE_ARTIST_SUCCESS,
  payload
});

export const updateFail = payload => ({
  type: UPDATE_ARTIST_FAIL,
  payload
});

export const updateAlbum = payload => dispatch => {
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/update/album",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.message);
    });
};
