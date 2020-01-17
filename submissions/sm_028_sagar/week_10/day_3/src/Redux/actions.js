import axios from "axios"
export const Register_User = 'Register_User'
export const Registration_check = 'Registration_check'
export const Registration_fail = 'Registration_fail'
export const Login_check = 'Login_check'
export const Get_Profile = 'Get_Profile'
export const Save_User = 'Save_Username'


export const registerUser = (query) => {
    return dispatch => {
        console.log('user detail',query)
        // console.log(requestParam)
        return axios.post('http://localhost:8080/auth/register',query)
        .then(res => dispatch(registrationSuccess(res)))
        .catch(err => dispatch(registrationFail(err.data)))
        .finally(console.log('done'))
    }
}

export const registrationSuccess = data =>{
    console.log('Success',data)
        return {
            type:Registration_check,
            data:data
        }
}

export const registrationFail = data =>{
    console.log('Fail',data)
    return {
        type:Registration_fail,
        data:data
    }
}


//----------- Steps for loggin user 

export const loginUser = query =>{      //query packet of username & password
    return dispatch => {    
        console.log('user detail',query)
        return axios.post("http://localhost:8080/auth/login",query)
                .then((res) => dispatch(loginCheck(res)))
                .catch(err => console.log('Error is :',err))
    }
} 

export const saveUsername = (username) =>{
    console.log('saving username',username)
    return {
        type:Save_User,
        username
    }
}

export const loginCheck = (data) =>{
    console.log('data in login',data)
    return {
        type:Login_check,
        data:data
    }
}



//-----------Below are steps to fetch user profile data

const instance = axios.create({
    baseURL: 'http://localhost:8080/user/',
  });

export const getProfile = (username,token) =>{
    console.log(token)
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return dispatch => {  
            return instance.get(`/${username}`)
                .then(res => dispatch(saveProfile(res.data)))
                .catch(err => console.log(err))
        }
    }

export const saveProfile = (data) =>{
    console.log('save profile',data)
    return {
        type:Get_Profile,
        data
    }
}