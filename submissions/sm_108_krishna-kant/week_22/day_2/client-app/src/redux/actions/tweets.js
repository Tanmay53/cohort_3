import axios from "axios";
import {
  FETCH_FEEDS_START,
  FETCH_FEEDS,
  FETCH_FEEDS_FAILS,
  FETCH_TWEETS,
  FETCH_TWEETS_START,
  FETCH_TWEETS_FAILS,
  ADD_TWEET,
  TOGGLE_IS
} from "../actionType";

export const fetchFeeds = payload => async dispatch => {
  dispatch({
    type: FETCH_FEEDS_START
  });
  try {
    let response = await axios.get(
      `http://localhost:5000/tweet/getuserfeeds/${payload}`
    );
    dispatch({
      type: FETCH_FEEDS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_FEEDS_FAILS
    });
  }
};

export const fetchMy = payload => async dispatch => {
  dispatch({
    type: FETCH_TWEETS_START
  });
  try {
    let response = await axios.get(
      `http://localhost:5000/tweet/getusertweets/${payload}`
    );

    console.log(response);
    dispatch({
      type: FETCH_TWEETS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_TWEETS_FAILS
    });
  }
};

export const addTweet = payload => async dispatch => {
  try {
    let response = await axios({
      method: "POST",
      url: `http://localhost:5000/tweet/addTweet/${payload.id}`,
      data: payload,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.data.error) {
      throw new Error(response.data.msg);
    } else {
      dispatch({
        type: ADD_TWEET
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const toggleIs = () => ({
  type: TOGGLE_IS
});
