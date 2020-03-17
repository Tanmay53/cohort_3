import arraydata from './Data.json'
import {LOGGED_IN,REGISTER,ADDFORMDATA,REMOVE_ITEM,SORTBYSALARY,SORTBYOPENINGS,FILTERLOCATION ,FILTERCOMPANY} from './action'


const initialState={
    maindata:arraydata,
    isloggedin:false,
    isregister:false,
    token : '',
    profiledata:[]
}

console.log(initialState.maindata)
const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADDFORMDATA:
            console.log(payload)
                return {
                  ...state,
                  maindata: [...state.maindata,payload]
                }
        case FILTERLOCATION:
            console.log(payload)
            return{
                ...state,
                maindata: [...state.maindata.filter(e => e.location === payload)]
            }
         case FILTERCOMPANY:
                    console.log(payload)
                    return{
                        ...state,
                        maindata: [...state.maindata.filter(e => e.name === payload)]
              }  
        case SORTBYSALARY:
            console.log(payload)
            let sortOrder = payload
            console.log(sortOrder)
            if( sortOrder === 'lowtohigh'){
                return {
                    ...state,
                    maindata: [...state.maindata.sort((a,b) => a.salary - b.salary )]
                }
            }
            else if( sortOrder === 'hightolow') {
                return {
                    ...state,
                    maindata: [...state.maindata.sort((a,b) => b.salary - a.salary)]
                }
            }
            break
        
        case SORTBYOPENINGS:
                    console.log(payload)
                    let sortOrderOpening = payload
                   
                    if( sortOrderOpening === 'lowtohigh'){
                        return {
                            ...state,
                            maindata: [...state.maindata.sort((a,b) => a.opening - b.opening )]
                        }
                    }
                    else if( sortOrderOpening === 'hightolow') {
                        return {
                            ...state,
                            maindata: [...state.maindata.sort((a,b) => b.opening - a.opening)]
                        }
                    }
                    break
         case LOGGED_IN:
             return {
                 ...state,
                 isloggedin:!state.isloggedin,
                 token:payload
             }
         case REGISTER:
             return {
                 ...state,
                 isregister:!state.isregister
             }
             case REMOVE_ITEM:
                    console.log(payload)
                    return {
                        ...state,
                        maindata: state.maindata.filter(e => e.id !== payload)
                    }
      
         default:
            return state
    }
}

export default reducer