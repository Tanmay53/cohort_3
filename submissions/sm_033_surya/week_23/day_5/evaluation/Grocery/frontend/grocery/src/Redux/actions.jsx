import axios from 'axios'
import history from '../history'
const LOGIN = "LOGIN"
const REQESTSENT = "REQESTSENT"
const REQUESTFAILED = "REQUESTFAILED"
const LOGOUT = "LOGOUT"
const PRODUCTDATA = "PRODUCTDATA"
const CATEGORYLIST = "CATEGORYLIST"
const LOADING = "LOADING"
const MAINDATA = "MAINDATA"
const FILTERING = "FILTERING"
const SORTING = "SORTING"

const datafetchsuccess = (type, data) => {
    console.log(type, data)
    return {
        type: type,
        data: data
    }
}
const requestfailure = (error) => {
    return {
        type: REQUESTFAILED,
        error: error
    }
}
const requestsent = (error) => {
    return {
        type: REQESTSENT,
    }
}
const filterdata = (data) => {
    return {
        type: FILTERING,
        data: data
    }
}
const logout =()=>{
    return{
        type:LOGOUT
    }
}
const sorting = (data) => {
    return {
        type: SORTING,
        data: data
    }
}
const loadingstatus = () => {
    return {
        type: LOADING
    };
}



const getsignup = (method, url, data) => {
    return dispatch => {
        dispatch(requestsent())
        axios({
            method: method,
            url: url,
            data: data
        })
            .then((res) => {
                alert("successfully registered")
                history.push("/login")
                console.log(res)
            })
            .catch((error) => {
                dispatch(requestfailure(error))
            })
    }
}

const login = (method, url, data) => {
    return dispatch => {
        dispatch(requestsent);
        axios({
            method: method,
            url: url,
            data: data
        })
            .then(res => {
                if (res.data.token){
                    dispatch(datafetchsuccess(LOGIN, res.data))
                }
                else {
                    alert("invalid credentials")
                }
            }
            )
            .catch(err => dispatch(requestfailure("invalid creditial")));
    };
}

const getcategories = (method, url, auth) => {
    return dispatch => {
        dispatch(loadingstatus())
        dispatch(requestsent);
        axios({
            method: method,
            url: url,
            headers: {
                'Authorization': auth
            }
        })
            .then(res => {
                dispatch(datafetchsuccess(CATEGORYLIST, res.data))
            }
            )
            .catch(err => dispatch(requestfailure("error occurs at fetch")));
    };
};

const sentdata = (method, url, auth, data) => {
    return dispatch => {
        dispatch(requestsent);
        axios({
            method: method,
            url: url,
            data: data,
            headers: {
                'Authorization': auth
            }
        })
            .then(res => {
                console.log(res)
                dispatch(datafetchsuccess(PRODUCTDATA, res.data))
                history.push("/")
            }
            )
            .catch(err => dispatch(requestfailure("error appear")));
    };
};

const getdata = (count, offset, auth) => {
    return dispatch => {
        dispatch(loadingstatus())
        dispatch(requestsent);
        axios({
            method: "GET",
            url: "http://localhost:5000/data/productdata",
            params: {
                count: count,
                offset: offset
            },
            headers: {
                'Authorization': auth
            }
        })
            .then(res => {
                dispatch(datafetchsuccess(MAINDATA, res.data))
            }
            )
            .catch(err => dispatch(requestfailure("invalid ")));
    };
};



export { getsignup, datafetchsuccess, requestfailure, requestsent, login, getcategories, sentdata, getdata, filterdata, sorting,logout }