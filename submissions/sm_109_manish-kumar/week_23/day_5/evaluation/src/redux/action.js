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
import axios from "axios";

export const registerAdminRequest = payload => {
  return{
    type:REGISTER_USER_REQUEST,
    payload
  }
}

export const registerAdminSuccessful = payload => {
  return{
    type:REGISTER_USER_SUCCESS,
    payload
  }
}

export const registerAdminFailure = payload => {
  return{
    type:REGISTER_USER_FAILURE,
    payload
  }
}

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  }
};

export const loginUserSuccess = payload => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload
  }
};

export const loginUserFailure = payload => {
  return {
    type: LOGIN_USER_FAILURE,
    error: payload
  }
};

export const addEmployee = payload => {
  return {
    type: ADD_EMPLOYEE,
    payload
  }
}

export const salarySortInc = () => {
  return {
    type:SORT_SALARY_INC
  }
}

export const salarySortDec = () => {
  return {
    type:SORT_SALARY_DEC
  }
}

export const  filterDepartment = payload => {
  return {
    type: FILTER_DEPARTMENT,
    payload
  }
}


export const registerUser = payload => {
  return dispatch => {
    dispatch(registerAdminRequest());
    return axios
      .post("http://localhost:8080/auth/register", {
        name: payload.name,
        username: payload.username,
        mobile: payload.mobile,
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(registerAdminSuccessful(res.data));
      })
      .catch(() => dispatch(registerAdminFailure()));
  };
};

export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("http://localhost:8080/auth/login", {
        username: payload.username,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFailure()));
  };
};