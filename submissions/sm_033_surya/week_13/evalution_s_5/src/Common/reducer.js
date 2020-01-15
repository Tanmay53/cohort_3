const LOGIN = "LOGIN"
const ADD = "ADD"
const SORTING="SORTING"
const DEL= "DEL"


const loginReducer = (state=false,action) =>{
    console.log(action)
    switch (action.type){
        case LOGIN :{
            state= action.value
            return state 
        }
        default :{
            return state
        }
    }
}
const addReducer = (state=[],action) =>{
    console.log(action,"hi")
    switch (action.type){
        case ADD :{
            return [...state,action.payload.item]
        }
        case SORTING:{

            let newstate=state.sort((a,b)=>a.loanAmount-b.loanAmount)
            console.log(newstate)
            return newstate
        }
        case DEL: {
            var id = action.id
            let newstate = state.filter((ele) => {
                if (ele.id !== id) {
                    return ele
                }
            })
            return newstate
        }
        default :{
            return state
        }
    }
}
export {addReducer,loginReducer}