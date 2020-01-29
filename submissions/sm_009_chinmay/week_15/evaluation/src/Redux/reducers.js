import {combineReducers} from 'redux'

export const USER_LOGIN = 'USER_LOGIN'
export const ADD_TOPIC = 'ADD_TOPIC'
export const SORT_ASC_TITLE = 'SORT_ASC_TITLE'
export const SORT_DESC_TITLE = 'SORT_DESC_TITLE'
export const SORT_ASC_DATE = 'SORT_ASC_DATE'
export const SORT_DESC_DATE = 'SORT_DESC_DATE'
export const EDIT_TOPIC = 'EDIT_TOPIC'

const initialLoginState = {
    username: 'admin',
    password: 'admin',
    isLoggedIn: false
}

const initialTopicsState = {
    topics: [],
}

const loginReducer = (state=initialLoginState, action)=> {
    const prevState = {...state}
    switch(action.type) {
        case USER_LOGIN:
            if(action.payload.state.username===prevState.username && action.payload.state.password===prevState.password) {
                prevState.isLoggedIn = true
                action.payload.props.history.push('/')
            }
            else {
                alert('Please enter correct credentials..!!')
            } 
            break
        default:
            break
    }
    return prevState
}

const topicsReducer = (state=initialTopicsState, action) => {
    const prevState = {...state}
    console.log('in topics reducer', prevState.topics)

    switch(action.type) {
        case ADD_TOPIC:
            prevState.topics = prevState.topics.concat(action.payload)
            return prevState

        case SORT_ASC_TITLE:
            prevState.topics = prevState.topics.sort((a, b)=> {
                var nameA = a.title.toUpperCase();
                var nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break

        case SORT_DESC_TITLE:
            prevState.topics = prevState.topics.sort((a, b)=> {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
            });
            break
        
        case SORT_ASC_DATE:
            prevState.topics = prevState.topics.sort((a, b)=> {
                return (a.time_stamp - b.time_stamp)
            })
            break
        
        case SORT_DESC_DATE:
            prevState.topics = prevState.topics.sort((a, b)=> {
                return (b.time_stamp - a.time_stamp)
            })
            break

        case EDIT_TOPIC:
            prevState.topics = prevState.topics.map((item)=> item.id==action.payload.id ? action.payload : item)
            console.log(prevState.topics)
            return prevState
        default:
            break
    }
    return prevState
}

const rootReducer = combineReducers({
    login: loginReducer,
    topics: topicsReducer
})

export default rootReducer