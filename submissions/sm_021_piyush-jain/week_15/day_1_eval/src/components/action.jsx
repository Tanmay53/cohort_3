import React from 'react'
const LOG="LOG"
const ADD="ADD"
const EDIT="EDIT"
const FILLER="FILLER"
const DEL="DEL"
const SORT="SORT"
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
const sort=(data)=>{
    console.log(data)
    return{
        type:SORT,
        data:data
    }
}
const filler=(value)=>{
    console.log(value)
    return{
        type:FILLER,
        value:value
    }
}
const edit=(data1,data2)=>{
    console.log(data2)
    return{
        type:EDIT,
        value:data1,
        id:data2
    }
}
export { log,add,sort,filler,edit}