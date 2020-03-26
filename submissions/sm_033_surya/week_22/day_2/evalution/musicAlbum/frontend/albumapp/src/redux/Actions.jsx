import axios from 'axios'
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const FETCH_GITHUB_REQUEST = "FETCH_GITHUB_REQUEST";
const FETCH_GITHUB_SUCCESS = "FETCH_GITHUB_SUCCESS";
const FETCH_GITHUB_FAILURE = "FETCH_GITHUB_FAILURE";

const loginsend =(data)=>{
    console.log("hhhhh")
    return{
        type:LOGIN,
        payload:{
            username:data.username,
            token:data.token
        }
    }
}
const logout =()=>{
    return{
        type:LOGOUT
    }
}

const fetchPostRequest = () => {
    console.log("fetch post request action called");
    return {
      type: FETCH_GITHUB_REQUEST,
    };
  };
  
  const fetchPostSuccess = data => {
    console.log("fetch post success action called");
    return {
      type: FETCH_GITHUB_SUCCESS,
      data: data
    };
  };
  
  const fetchPostFailure = error => {
    console.log("fetch post failure action called");
    return {
      type: FETCH_GITHUB_FAILURE,
      error: error
    };
  };
  
  // action to fetch the data 
  const login = (data) => {
    return dispatch => {
      console.log("dispatching post request action...");
      dispatch(fetchPostRequest);
      console.log("hello");
      return axios({
        method: "POST",
        url: "http://localhost:5000/users/login",
        data: data
    })
        .then(res => {
          console.log("response success", res.data);
          return dispatch(loginsend(res.data));
        })
        .catch(err => dispatch(fetchPostFailure(err)));
    };
  };

export {login,logout}