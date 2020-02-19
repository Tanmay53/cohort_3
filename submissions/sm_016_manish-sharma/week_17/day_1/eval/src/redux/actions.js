import axios from 'axios'
//action types
export const GO_TO_BOOKING='GO_TO_BOOKING'
export const CONFIRM='CONFIRM'
export const FETCH_GITHUB_REQUEST='FETCH_GITHUB_REQUEST'
export const FETCH_GITHUB_SUCCESS1='FETCH_GITHUB_SUCCESS1'
export const FETCH_GITHUB_SUCCESS2='FETCH_GITHUB_SUCCESS2'

//actions
export const goToBooking=(item,hrs)=>({
    type:GO_TO_BOOKING,
    payload:{
        itemName:item,
        hrs:hrs
    }
})

export const confirm=(item)=>({
    type:CONFIRM,
    payload:item
})

export const fetchPostRequest = query => {
    return {
      type: FETCH_GITHUB_REQUEST,
      query: query || ""
    };
  }
export const fetchPostSuccess1= data=>{
    return {
        type: FETCH_GITHUB_SUCCESS1,
        data:data
    }
}
export const fetchPostSuccess2= data=>{
    return {
        type: FETCH_GITHUB_SUCCESS2,
        data:data
    }
}

export  const fetchData1 = (query = null) => {
    return dispatch => {
      dispatch(fetchPostRequest);
      return axios
        .post('http://localhost:8080/auth/login',query)
        .then(res => {
          console.log("response success", res.data);
          if(res.data.error==false){
            alert('Login Successfull!!')
          }
          else if (res.data.error==true){
            alert('Invalid login creadentials')
          }
          else{
            alert('Sorry there is something wrong!!')
          };
          return dispatch(fetchPostSuccess1(res.data));
        })
        .catch(err => console.log(err));
    };
  };

export  const fetchData2 = (query = null) => {
    return dispatch => {
      dispatch(fetchPostRequest);
      return axios
        .post('http://localhost:8080/auth/register',query)
        .then(res => {
          console.log("response success", res.data);
          if(res.data.error==false){
            alert('Registration Successfull!! You Can Go to Dashboard now')
          }
          else if (res.data.error==true){
            alert('Registration failed, user already exists')
          }
          else{
            alert('Sorry there is something wrong!!')
          };
          return dispatch(fetchPostSuccess2(res.data));
        })
        .catch(err => console.log(err));
    };
  };