const LOGIN = "LOGIN"
const ADD = "ADD"
const SORTING = "SORTING"
const DEL ="DEL"
const loginaction =()=> {
    return {
        type :LOGIN,
        value :true
     }
}
const adduser = (item) =>{
    return{
        type: ADD,
        payload:{
            item :item
        }
    }
}

// const sorting =()=>{
//     return{
//     type:SORTING
//     }
// }

// const del = (id) => {
//     return {
//         type: DEL,
//         id: id,
//     }
// }
export {adduser,loginaction}