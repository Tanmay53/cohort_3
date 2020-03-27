import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  ADD_EMPLOYEE,
  SORT_SALARY_INC,
  SORT_SALARY_DEC,
  FILTER_DEPARTMENT
} from "./actionType";

const initialState = {
  isAuth :false,
  isLoading:true,
  error:false,
  data:[],
  newData:[],
  filterData:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return{
        ...state,
        isLoading:true
      }

    case REGISTER_USER_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isAuth:true
      }

    case REGISTER_USER_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:true
    }

    case LOGIN_USER_REQUEST:
      return{
        ...state,
        isLoading:true
      }

    case LOGIN_USER_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isAuth:true
      }

    case LOGIN_USER_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:true
    }
    case ADD_EMPLOYEE:
      return {
        ...state,
        data:[...state.data, action.payload],
        newData: [...state.data, action.payload]
      }

    case SORT_SALARY_INC:
      return{
        ...state,
        newData: state.data.sort((a,b) => a.salary - b.salary)
      }

      case SORT_SALARY_DEC:
        return{
          ...state,
          newData: state.data.sort((a,b) => b.salary - a.salary)
        }

      case FILTER_DEPARTMENT:
        return {
          ...state,
          newData: state.data.filter(ele => ele.department === action.payload)
        }

    default :
      return state;
  }
}

export default reducer;