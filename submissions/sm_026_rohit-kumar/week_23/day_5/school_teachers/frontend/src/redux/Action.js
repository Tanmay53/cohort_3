import axios from 'axios'

const user_login = (data) => {
    return {
        type: 'USER_LOGIN',
        payload: {'data': data}
    }
}

const user_logout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}


const load_teacher = (data) => {
    return {
        type: 'LOAD_TEACHER',
        payload: data
    }
}

const fetchTeachers = () => {
      return dispatch => {
      return axios.get('http://localhost:5000/teacher/fetch')
        .then(res => {
          console.log('teachers : ', res)
          return dispatch(load_teacher(res['data']['data']));
        })
    }
  }



export {user_login, user_logout, fetchTeachers}