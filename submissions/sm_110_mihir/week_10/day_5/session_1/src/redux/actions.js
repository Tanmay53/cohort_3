import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const TOGGLE_LOGGEDIN = "TOGGLE_LOGGEDIN";
export const RESET = "RESET";

export const reset = () => ({
    type: RESET
});

export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const fetchSuccess = content => ({
    type: FETCH_SUCCESS,
    data: content
});

export const fetchFailure = content => ({
    type: FETCH_FAILURE,
    error: content
});

export const toggleLoggedIn = () => ({
    type: TOGGLE_LOGGEDIN
});
export const fetchData = (
    url,
    method,
    data = {},
    headers = { "Content-Type": "application/json" }
) => {
    const config = {
        baseURL: "http://localhost:8080",
        url: url,
        method: method,
        headers: headers,
        data: data
    };
    return async dispatch => {
        console.log(config);
        dispatch(fetchRequest);
        await axios(config)
            .then(res => {
                console.log("response success", res.data);
                return dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                console.log("error", err);
                return dispatch(fetchFailure(err));
            });
    };
};
