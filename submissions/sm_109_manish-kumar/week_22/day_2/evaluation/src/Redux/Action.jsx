export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const VERIFY_USER_DETAIL = "VERIFY_USER_DETAIL";
export const GOT_JOB_DETAIL = "GOT_JOB_DETAIL";
export const DEL_KEY = "DEL_KEY";
export const EDIT_KEY = "EDIT_KEY";
export const EDITED_DATA = "EDITED_DATA"

export const userRegistration = (data) => {
  return {
    type: GET_USER_DETAIL,
    data
  }
}
export const loginDetail = (data) => {
  return {
    type: VERIFY_USER_DETAIL,
    data
  }
}
export const jobDetail = (data) => {
  return {
    type : GOT_JOB_DETAIL,
    data
  }
}
export const delKey = (key) => {
  return {
    type:DEL_KEY,
    key
  }
}

export const keyForEdit = (key) => {
  return {
    type: EDIT_KEY,
    key
  }
}
export const jobeditedDetail = (data) => {
  return {
    type:EDITED_DATA,
    data
  }
}