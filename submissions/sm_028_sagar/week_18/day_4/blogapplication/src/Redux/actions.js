
export const Login = 'Login'    

export const login = user =>{
    return{
        type:Login,
        user
    }
}

export const Logout = 'Logout'

export const logout = () =>{
    const localdata = {
        token:'',
        status:false
    }
    localStorage.setItem('userDetail',JSON.stringify(localdata))
    return{
        type:Logout,
    }
}

export const SaveUser = 'SaveUser'

export const saveUser = user =>{
    return {
        type:SaveUser,
        user
    }
}
