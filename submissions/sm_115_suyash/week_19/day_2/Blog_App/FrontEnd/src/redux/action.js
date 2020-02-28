import axios from "axios";
import { axiosLoading } from "./loginAction";
export const FETCT_DATA_ALL_BLOG_SUCCESS = "FETCT_DATA_ALL_BLOG_SUCCESS";
export const FETCT_DATA_ALL_BLOG_FAIL = "FETCT_DATA_ALL_BLOG_FAIL";
export const FETCT_DATA_ALL_BLOG = "FETCT_DATA_ALL_BLOG";
export const FETCT_DATA_MY_BLOG = "FETCT_DATA_MY_BLOG";
export const FETCT_DATA_MY_BLOG_SUCCESS = "FETCT_DATA_MY_BLOG_SUCCESS";
export const FETCT_DATA_MY_BLOG_FAIL = "FETCT_DATA_MY_BLOG_FAIL";

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
      console.log(res.data, "<-------------------myblog data");
    })
    .catch(err => {
      console.log(err.message);
    });
};
