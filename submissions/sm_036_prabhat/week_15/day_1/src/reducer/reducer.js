import { CHECK_AUTH , ADD_NEW_TOPIC, DELETE_ITEM, SORT_ITEM} from './action';


const initalState = {
    isLogin : false,
    mainData : []

}

const reducer = (state = initalState, action) => {
    switch(action.type){
        
        case CHECK_AUTH :
            if(action.payload.username === "admin" && action.payload.password === "admin"){
            return {
                    ...state,
                    isLogin : true
                }
            }
        case ADD_NEW_TOPIC : 
            return {...state, mainData : [...state.mainData, action.payload.data]};

        case DELETE_ITEM :
            return state.mainData.filter((item, index) => index !== action.payload);

        case SORT_ITEM :
            console.log(action.payload.data)
            return state.mainData.sort((a,b) => a.category - b.category)
        default :  
            return  state
    }
}


export default reducer
