import axios from 'axios'

const user_loggedin = (token) => {
    return {
        type: 'USER_LOGGED_IN',
        payload: token

    }   
}

const user_loggedout = () => {
    return {
        type: 'USER_LOGGED_OUT'
    }   
}

const sort_room = (basedOn, order) => {
    return {
        type: 'SORT_ROOM',
        payload: {'basedOn': basedOn, 'order': order}
    }
}

const paged_room = (beg, end) => {
    return {
        type: 'PAGED_ROOM',
        payload: {'beg': beg, 'end': end}
    }
}


const login_user = (obj) => {

    return dispatch => {
        axios.post('http://localhost:8080/auth/login', {
            username: obj.username,
            password: obj.password
        })
        .then(res => {
            console.log(res)
            if(res.status === 200 && res.data.error === false) {
                console.log('dispatched....')
                dispatch(user_loggedin(res.data.token))
            }
        })
        .catch(err => console.log(err))
    
    }
}


export {login_user, user_loggedin, user_loggedout, sort_room, paged_room}