import { GOT_JOB_DETAIL, DEL_KEY, EDIT_KEY, EDITED_DATA, GET_USER_DETAIL, VERIFY_USER_DETAIL} from "./Action"

const initialState = {
  companyList : [],
  edit:[],
  loggedIn:false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_JOB_DETAIL:
      return{
        ...state,
        companyList : [...state.companyList,action.data]
      }
      case DEL_KEY:
        return{
          ...state,
          companyList: state.companyList.filter(ele => ele.id !== action.key)
        }
      case EDIT_KEY:
        return{
          ...state,
          edit: state.companyList.filter(ele => ele.id === action.key),
          companyList: state.companyList.filter(ele => ele.id !== action.key)
        }
      case EDITED_DATA:
        return{
          ...state,
          companyList : [...state.companyList,action.data]
        }
      case GET_USER_DETAIL:
        return{
          ...state,
          loggedIn:true
        }
      case VERIFY_USER_DETAIL :
        return{
          ...state,
          loggedIn:true
        }
      default:
        return state;
  }
}


export default reducer;