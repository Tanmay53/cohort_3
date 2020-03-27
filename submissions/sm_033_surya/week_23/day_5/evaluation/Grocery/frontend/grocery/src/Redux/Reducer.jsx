const LOGIN = "LOGIN"
const REQESTSENT = "REQESTSENT"
const REQUESTFAILED = "REQUESTFAILED"
const LOGOUT = "LOGOUT"
const CATEGORYLIST = "CATEGORYLIST"
const LOADING = "LOADING"
const MAINDATA = "MAINDATA"
const FILTERING = "FILTERING"
const SORTING = "SORTING"




const initialloginstate = {
    login: false,
    token: localStorage.getItem("token"),
    username: "",
    isloading: true,
    maindata: [],
    duplicatedata: [],
    categorylist: [],
    pagelist: [],
    totalpages: "",
    isadmin: false
}
if (localStorage.getItem("token")) {
    initialloginstate.login = true
    initialloginstate.username = localStorage.getItem("user")
}

const loginreducer = (state = initialloginstate, action) => {
    switch (action.type) {
        case REQESTSENT:
            return {
                ...state,
                isloading: false
            }
        case REQUESTFAILED:
            alert("some error")
            return {
                ...state
            }
        case LOGIN:
            console.log(action.data)
            localStorage.setItem("token", action.data.token)
            localStorage.setItem("user", action.data.username)
            localStorage.setItem("usertype", action.data.isadmin)
            return {
                ...state,
                login: true,
                username: action.data.username,
                token: action.data.token,
                isadmin: action.data.isadmin
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                login: false
            }
        case CATEGORYLIST:
            return {
                ...state,
                isloading: true,
                categorylist: action.data
            }
        case LOADING: {
            return {
                ...state,
                // isloading:true
            }
        }
        case MAINDATA: {
            let templist = []
            for (let i = 1; i <= action.data.totalpages; i++) {
                templist.push(i)
            }
            return {
                ...state,
                pagelist: templist,
                maindata: action.data.listofdata,
                duplicatedata: action.data.listofdata
            }
        }
        case SORTING: {
            if (action.data) {
                return {
                    ...state,
                    duplicatedata: state.maindata.sort((a, b) => a.price - b.price)
                }
            }
            else {
                return {
                    ...state,
                    duplicatedata: state.maindata.sort((a, b) => b.price - a.price)
                }
            }
        }
        case FILTERING: {
            return {
                ...state,
                duplicatedata: state.maindata.filter((ele) => ele.category == action.data)
            }
        }


        default: {
            return state
        }
    }
}

export { loginreducer }