export const ADD_INPUT_DATA = "ADD_INPUT_DATA";
export const ADD_EXPENSE_DATA = "ADD_EXPENSE_DATA";
export const ADD_USER_LOGIN_INFO = "ADD_USER_LOGIN_INFO";
export const CHECK_USER_ISAUTH = "CHECK_USER_ISAUTH";

export const addIncomeData = payload => ({
  type: ADD_INPUT_DATA,
  payload
});

export const addExpenseData = payload => ({
  type: ADD_EXPENSE_DATA,
  payload
});

export const addUserLoginInfo = payload => ({
  type: ADD_USER_LOGIN_INFO,
  payload
});

export const checkUserIsauth = payload => ({
  type: CHECK_USER_ISAUTH,
  payload
});
