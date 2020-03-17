import axios from 'axios'

export const User_Register_Success = 'User_Register_Success'


// export const registerUser = (data) =>{
//     return (dispatch) => {
//         return axios.post('http://127.0.0.1:5000/auth/signup',data)
//                 .then(res => dispatch(registerSuccess(res.data)))
//                 .catch(err => dispatch(registerFail(err)))
//         }
//     }

// export const registerSuccess = data =>{
//     return {
//         type:User_Register_Success,
//         data
//     }
// }

// export const registerFail = (err) =>{
//     console.log(err)
// }


// export const User_Login_Success = 'User_Login_Success'


// export const loginUser = (data) =>{
//     return (dispatch) => {
//         return axios.post('http://127.0.0.1:5000/auth/login',data)
//                 .then(res => dispatch(loginSuccess(res.data)))
//                 .catch(err => dispatch(loginFail(err)))
//     }
// }

// export const loginSuccess = data =>{
//     return {
//         type:User_Login_Success,
//         data
//     }
// }

// export const loginFail = (err) =>{
//     console.log(err)
// }


//==========================================
export const loginStatus = 'loginUser'

export const login = (status) =>{
    return {
        type:loginStatus,
        status
    }
}


export const SortData = 'sortData'

export const sortData = (value) =>{
    console.log('triggered sortdata')
    return {
        type:SortData,
        value
    }
}

export const SaveData = 'SaveData'
export const saveData = (data) =>{
    console.log('save data',data)
    return{
        type:SaveData,
        data
    }
}

export const Logout = 'Logout'
export const logout = () =>{
    localStorage.setItem('detail',JSON.stringify({
        token:null,
        loggedIn:false
    }))
    return {
        type:Logout
    }
}
