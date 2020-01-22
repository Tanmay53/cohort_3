
const ADD ="ADD"
const DELETE = "DELETE"
const CART = "CART"
const ORDER = "ORDER"
const CUPDATE ="CUPDATE"
const USERUPDATE= "USERUPDATE"
const ALOGIN = "ALOGIN"

const add = (data) => {
    return{
        type:ADD,
        playload:{
            data:data
        }
    }
};

const del = (id) =>{
    return{
        type:DELETE,
        playload:{
            id:id
        }
    }
}

const cart = (id) => {
    return {
        type:CART,
        playload:{
            id:id
        }
    }
}

const order = (data) =>{
    return{
        type:ORDER,
        playload:{
            data:data,
        }
    }
}
const cartupdate = (data)=>{
    return {
        type:CUPDATE,
        playload:{
            data:data
        }
    }
}
const userupdate = (id,data)=>{
    return{
        type:USERUPDATE,
        playload:{
            id:id,
            data:data
        }
    }
}
const adminlogin = (value)=>{
    return {
    type:ALOGIN,
    isadmin:value
    }
}
export {add,del,cart,order,cartupdate,userupdate,adminlogin}

