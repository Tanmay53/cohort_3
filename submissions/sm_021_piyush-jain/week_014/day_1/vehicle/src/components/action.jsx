import React from 'react'
const LOG="LOG"
const ADD="ADD"
const FILL="FILL"
const DEL="DEL"
const EDIT="EDIT"
const log=()=>{
    console.log("hi")
    return{
        type:LOG
    }
}
const add=(data)=>{
    console.log(data)
    return{
        type:ADD,
        data:data
    }
}
const del=(id)=>{
    console.log(id)
    return{
        type:DEL,
        id:id
    }
}
const fill=(value)=>{
    console.log(value)
    return{
        type:FILL,
        value:value
    }
}
const edit=(value)=>{
    console.log(value)
    return{
        type:EDIT,
        value:value
    }
}
export { log,add,del,fill,edit}