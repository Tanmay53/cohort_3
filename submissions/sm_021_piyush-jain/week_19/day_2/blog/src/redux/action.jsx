const LOGIN="LOGIN"
const LOGOUT="LOGOUT"


const logout=()=>{
    return{
        type:"LOGOUT",
    }
}

const login=(token)=>{
    return{
        type:"LOGIN",
        payload:token
    }
}

export {logout,login}