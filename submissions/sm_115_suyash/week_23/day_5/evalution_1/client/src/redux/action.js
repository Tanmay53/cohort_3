import axios from "axios";
import { axiosRequest } from "./loginAction";
export const FETCH_FOLLOWING_TWEETS_SUCCESS = "FETCH_FOLLOWING_TWEETS_SUCCESS";
export const FETCH_FOLLOWING_TWEETS_FAIL = "FETCH_FOLLOWING_TWEETS_FAIL";

export const ADD_NEW_TWEET_SUCCESS = "ADD_NEW_TWEET_SUCCESS";
export const ADD_NEW_TWEET_FAIL = "ADD_NEW_TWEET_FAIL";

export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAIL = "FETCH_ALL_USERS_FAIL";

export const FOLLOW_NEW_USER_SUCCESS = "FOLLOW_NEW_USER_SUCCESS";
export const FOLLOW_NEW_USER_FAIL = "FOLLOW_NEW_USER_FAIL";

// Fetch following tweets
export const fetchFollowingTweetsSuccess = payload => ({
  type: FETCH_FOLLOWING_TWEETS_SUCCESS,
  payload
});

export const fetchFollowingTweetsFail = payload => ({
  type: FETCH_FOLLOWING_TWEETS_FAIL,
  payload
});

export const fetchFollowingTweets = payload => dispatch => {
  console.log(payload);
  dispatch(axiosRequest());
  let page = payload.page || 1;
  axios({
    url: `http://localhost:5000/show/tweets?page=${page}`,
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      dispatch(fetchFollowingTweetsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchFollowingTweetsFail(err.message));
    });
};

// Add New Tweet

export const addNewTweetSuccess = payload => ({
  type: ADD_NEW_TWEET_SUCCESS,
  payload
});

export const addNewTweetFail = payload => ({
  type: ADD_NEW_TWEET_FAIL,
  payload
});

export const addNewTweet = payload => dispatch => {
  console.log(payload);
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/create/post",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      dispatch(addNewTweetSuccess(res.data.message));
    })
    .catch(err => {
      dispatch(addNewTweetFail(err.message));
    });
};

// Fetch All Users for follow

export const fetchAllUsersSuccess = payload => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload
});

export const fetchAllUsersFail = payload => ({
  type: FETCH_ALL_USERS_FAIL,
  payload
});

export const fetchAllUsers = payload => dispatch => {
  console.log(payload);
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/show/users",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetchAllUsersSuccess(res.data.data));
    })
    .catch(err => {
      console.log(err.message);
      dispatch(fetchAllUsersFail(err.message));
    });
};

// Follow New User

export const followNewUserSuccess = payload => ({
  type: FOLLOW_NEW_USER_SUCCESS,
  payload
});

export const followNewUserFail = payload => ({
  type: FOLLOW_NEW_USER_FAIL,
  payload
});

export const followNewUser = payload => dispatch => {
  console.log(payload);
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/user/following",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
      dispatch(followNewUserSuccess(res.data));
    })
    .catch(err => {
      console.log(err.message);
      dispatch(followNewUserFail(err.message));
    });
};
