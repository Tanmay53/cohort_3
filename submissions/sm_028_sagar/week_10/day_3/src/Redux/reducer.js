import {Registration_check,Register_User, Registration_fail, Login_check, Get_Profile, Save_User} from './actions'
import { act } from 'react-dom/test-utils'
import Axios from 'axios'

const initStore = {
    isLoading: false,
    param: {},
    data: [],
    alert:'',
    status:0,
    username:'',
    isLoggedIn:false,
    profileData:'',
    token:''
}


const reducer = (state = initStore,action) => {
    console.log(state.status)
    switch(action.type){
        case Register_User:
            const requestParam = {
                method:'post',
                url:'http://localhost:8080/auth/register',
                params:action.query
            }
            return {
                ...state,
                param:requestParam
            }
        case Registration_check:    
            return {
                ...state,
                alert:action.data.data.message,
                status:action.data.status
            }
        case Registration_fail:
            return {
                ...state,
                data:action.data,
                error:action.data
            }
        case Login_check:
                if(action.data.status === 200){
                    return {
                        ...state,
                        isLoggedIn:!state.isLoggedIn,
                        token:action.data.data.token
                    }
                }else {
                    return {
                        ...state
                    }
                }
        case Save_User:
                return {
                    ...state,
                    username:action.username
                }
        case Get_Profile:    
                return {
                    ...state,
                    profileData:action.data,
                }
        default:
            return state    
    }
}

export default reducer