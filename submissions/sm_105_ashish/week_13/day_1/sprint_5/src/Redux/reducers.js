import {LOG_IN , ADD_STAFF , LOG_OUT , DELETE_USER, UPDATE_USER} from './actions'


const initialState = {
    isAuthenticated:false,
    authentication:{userName:"Ashish",password:'Ashish123'},
    userDataBase:[]
}

export default function reducers(state = initialState,action){
    switch(action.type){
        case LOG_IN : 
          return{
                 ...state,
                 isAuthenticated:true
                    }
        case ADD_STAFF:
            return{
                ...state,
                userDataBase:[...state.userDataBase,action.payload]
            }
         case LOG_OUT:
             return{
                 ...state,
                 isAuthenticated:false
             }
        case DELETE_USER:
            const newArr = state.userDataBase.filter(ele => action.payload!== ele.email)
            return{
                ...state,
                userDataBase:[...newArr]
            }
        case UPDATE_USER:

             const arr = state.userDataBase.map(ele =>{
                 if(ele.email === action.payload.email){
                     return(
                         {...ele,...action.payload}
                     )
                 }
             })
            return{
                ...state,
                userDataBase:[...arr]
            }
        default: 
        return state
    }
}