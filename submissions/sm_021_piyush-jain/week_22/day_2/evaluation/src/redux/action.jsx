const LOGIN="LOGIN"
const LOGOUT="LOGOUT"


const logout=()=>{
    return{
        type:"LOGOUT",
    }
}

const login=(token,person)=>{
    console.log(person)
    return{
        type:"LOGIN",
        payload:token,
        person:person
    }
}

export {logout,login}