import {
  ADD_INPUT_DATA,
  ADD_USER_LOGIN_INFO,
  CHECK_USER_ISAUTH,
  ADD_EXPENSE_DATA
} from "./action";

const initialState = {
  userIncomeData: [],
  userExpanseData: [],
  totalBal: 0,
  userLoginInfo: {},
  isAuth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT_DATA:
      return {
        ...state,
        userIncomeData: [...state.userIncomeData, action.payload],
        totalBal: state.totalBal + Number(action.payload.income)
      };
    case ADD_EXPENSE_DATA:
      if (state.totalBal < 10000) {
        alert("Your Balance is running low");
      }
      if (state.totalBal > 0) {
        return {
          ...state,
          userExpanseData: [...state.userExpanseData, action.payload],
          totalBal: state.totalBal - Number(action.payload.expense)
        };
      } else {
        alert("Not inaf for this expense");
      }
    case ADD_USER_LOGIN_INFO:
      alert("Sing in successfully");
      return {
        ...state,
        userLoginInfo: action.payload
      };
    case CHECK_USER_ISAUTH:
      if (
        state.userLoginInfo.email == action.payload.email &&
        state.userLoginInfo.pass == action.payload.pass
      ) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        alert("Wrong username or password");
      }

    default:
      return state;
  }
};

export default reducer;
