import {
  FETCH_FEEDS,
  FETCH_FEEDS_FAILS,
  FETCH_FEEDS_START,
  FETCH_TWEETS,
  FETCH_TWEETS_FAILS,
  FETCH_TWEETS_START,
  ADD_TWEET,
  TOGGLE_IS
} from "../actionType";

const initialState = {
  feeds: [],
  tweets: [],
  loading: false,
  isPosted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDS_START:
      return {
        ...state,
        loading: false
      };
    case FETCH_FEEDS:
      return {
        ...state,
        feeds: action.payload,
        loading: false
      };
    case FETCH_FEEDS_FAILS:
      return {
        ...state,
        loading: false
      };
    case FETCH_TWEETS_START:
      return {
        ...state,
        loading: false
      };
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload,
        loading: false
      };
    case FETCH_TWEETS_FAILS:
      return {
        ...state,
        loading: false
      };
    case ADD_TWEET:
      return {
        ...state,
        isPosted: true
      };
    case TOGGLE_IS:
      return {
        ...state,
        isPosted: false
      };
    default:
      return state;
  }
};
