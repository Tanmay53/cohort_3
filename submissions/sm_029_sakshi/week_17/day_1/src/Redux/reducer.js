import { RETURN_RESPONSE,LOGIN ,ADD_TO_CART} from './action'
import arraydata from './Data.json'


const initialState={
    response:"",
    maindata:arraydata,
    login: false,
    ordersPlaced:[],
    total:""
}


console.log(initialState.maindata)
const reducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case RETURN_RESPONSE:
        return { ...state, response: payload }
    
        case LOGIN:
            return {
                ...state,
                login: true
            }
      case ADD_TO_CART:
                    console.log(payload)
                    const aaddd=state.maindata.filter(e=>e.id===payload)
               
                        return{
                            ...state,
                            
                            ordersPlaced: [...state.ordersPlaced,aaddd[0] ]
                        }
                    

    default:
        return state
    }
}

export default reducer