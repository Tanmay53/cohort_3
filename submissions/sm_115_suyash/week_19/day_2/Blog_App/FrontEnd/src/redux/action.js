import axios from "axios";
import { axiosLoading } from "./loginAction";
export const FETCT_DATA_ALL_BLOG_SUCCESS = "FETCT_DATA_ALL_BLOG_SUCCESS";
export const FETCT_DATA_ALL_BLOG_FAIL = "FETCT_DATA_ALL_BLOG_FAIL";
export const FETCT_DATA_ALL_BLOG = "FETCT_DATA_ALL_BLOG";
export const FETCT_DATA_MY_BLOG_SUCCESS = "FETCT_DATA_MY_BLOG_SUCCESS";
export const FETCT_DATA_MY_BLOG_FAIL = "FETCT_DATA_MY_BLOG_FAIL";
export const CREATE_NEW_BLOG_SUCCESS = "CREATE_NEW_BLOG_SUCCESS";
export const CREATE_NEW_BLOG_FAIL = "CREATE_NEW_BLOG_FAIL";
export const CREATE_NEW_COMMENT_SUCCESS = "CREATE_NEW_COMMENT_SUCCESS";
export const CREATE_NEW_COMMENT_FAIL = "CREATE_NEW_COMMENT_FAIL";
export const SHOW_COMMENTS_SUCCESS = "SHOW_COMMENTS_SUCCESS";
export const SHOW_COMMENTS_FAIL = "SHOW_COMMENTS_FAIL";

export const fetchDataAllBlogSuccess = payload => ({
  type: FETCT_DATA_ALL_BLOG_SUCCESS,
  payload
});

export const fetchDataAllBlogFail = payload => ({
  type: fetchDataAllBlogFail,
  payload
});

export const fetchDataAllBlog = () => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/show/blog",
    method: "GET"
  })
    .then(res => {
      console.log(res);
      dispatch(fetchDataAllBlogSuccess(res.data));
    })
    .catch(err => console.log(err.message));
};

export const fetchDataMyBlogSuccess = payload => ({
  type: FETCT_DATA_MY_BLOG_SUCCESS,
  payload
});

export const fetchDataMyBlogFail = payload => ({
  type: FETCT_DATA_MY_BLOG_FAIL,
  payload
});

export const fetchDataMyBlog = payload => dispatch => {
  console.log(payload);
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/show/myblog",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      dispatch(fetchDataMyBlogSuccess(res.data));
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const createNewBlogSuccess = payload => ({
  type: CREATE_NEW_BLOG_SUCCESS,
  payload
});

export const createNewBlogFail = payload => ({
  type: CREATE_NEW_BLOG_FAIL,
  payload
});

export const createNewBlog = payload => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/create/blog",
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

export const createNewCommentSuccess = payload => ({
  type: CREATE_NEW_COMMENT_SUCCESS,
  payload
});

export const createNewCommentFail = payload => ({
  type: CREATE_NEW_COMMENT_FAIL,
  payload
});

export const createNewComment = payload => dispatch => {
  console.log("payload====>", payload);
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/create/comment",
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

export const fetchShowCommentsSuccess = payload => ({
  type: SHOW_COMMENTS_SUCCESS,
  payload
});
 
export const fetchShowCommentsFail = payload => ({
  type: SHOW_COMMENTS_FAIL,
  payload
});

export const fetchShowComments = payload => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/show/comment",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res.data);
      dispatch(fetchShowCommentsSuccess(res.data));
    })
    .catch(err => {
      console.log(err.message);
    });
};
