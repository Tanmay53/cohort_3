import axios from 'axios'

//actions
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchPostRequest = query => {
    console.log("fetch post request action called")
    return {
        type: FETCH_REQUEST,
        query: query || ""
    };
}

export const fetchPostSuccess = data => {
    console.log("fetch post success action called");
    return {
      type: FETCH_SUCCESS,
      data: data
    };
};

export const fetchPostFailure = error => {
    console.log("fetch post failure action called");
    return {
      type: FETCH_FAILURE,
      error: error
    };
};

export const fetchData = query => {
    let body = JSON.stringify(query);
    console.log(query)
    let config = 
        {
        baseURL: "http://localhost:8080/auth",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        dispatch(fetchPostRequest)
        return axios
        .post(`/register`,body,config)
        .then(res => {
            console.log("response success-",res)
            alert(res.data.message)
            return dispatch(fetchPostSuccess(res.status))
        })
        .catch(err =>{
            alert("error code "+err);
            dispatch(fetchPostFailure(err))
        })
    }
}

export const fetchDataSign = query => {
    let body = JSON.stringify(query);
    console.log(query)
    let config = 
        {
        baseURL: "http://localhost:8080/auth",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        dispatch(fetchPostRequest)
        return axios
        .post(`/login`,body,config)
        .then(res => {
            console.log("response success-",res)
            alert(res.data.token)
            return dispatch(fetchPostSuccess(res.status))
        })
        .catch(err =>{
            alert("error code "+err);
            dispatch(fetchPostFailure(err))
        })
    }
}