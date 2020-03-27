import { User_Register_Success, User_Login_Success, loginStatus, SortData, SaveData, Logout} from "./Actions"


const intialState = {
    curr_user_data : [],
    productData : [],
    error_message:'',
    isLoggedIn:false
}

const reducer = (state = intialState, action) =>{
                     switch(action.type){
                        //  case User_Register_Success:
                        //      console.log('reducer',action.data)
                        //      return {
                        //          ...state,
                        //          error_message:''
                        //      }
                        //   case User_Login_Success:
                        //      console.log('reducer',action.data)
                        //     return {
                        //         ...state,
                        //         curr_user_data : action.data,
                        //     }
                         case SaveData:
                             console.log('coming in here',action.data)
                             return {
                                 ...state,
                                 productData : action.data
                             }
                         case loginStatus:
                             return {
                                 ...state,
                                 isLoggedIn:action.status
                             }
                         case SortData:
                             let sortArr = []
                             console.log(state.productData)
                             if(action.value ==='all'){
                                 return {
                                     ...state,
                                     productData:[...state.productData]
                                 }
                             }else if(action.value === 'lotohi'){
                                 sortArr = state.productData.sort((a,b) => Number(a.price) - Number(b.price) )
                                 console.log('sort',sortArr)
                                 return {
                                     ...state,
                                     productData:[...sortArr]
                                 }
                             }else if(action.value === 'hitolo'){
                                sortArr = state.productData.sort((a,b) => Number(b.price) - Number(a.price) )
                                console.log('sort',sortArr)
                                return {
                                    ...state,
                                    productData:[...sortArr]
                                }
                             }
                             break;
                         case Logout:
                                return{
                                    ...state,
                                    isLoggedIn:false
                                }
                         default:
                             return state
                     }
                     
                }

export default reducer