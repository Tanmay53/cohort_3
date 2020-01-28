import {LOGIN,ADD_TOPIC,UPDATE_INFO,EDIT_INFO, SHOW_TOPIC, FILTER} from './Action'

const initialState = {
    userName : "admin",
    password : "admin",
    topic : [],
    form : false,
    duplicate : []
}

const Reducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case LOGIN :
            if(action.payload.userName == state.email && action.payload.password == state.password)
            {
                alert("Successful")
                return {
                    ...state,form : true
                }
            }
            else
            {
                alert("tryagain")
            }
        case ADD_TOPIC:
            // console.log(state.topic)
            if(action.payload != "")
            {
                // console.log(action.payload)
                let obj = action.payload
                return {
                    ...state,topic:[...state.topic,obj],duplicate:[...state.duplicate,obj]
                }
            }
        case SHOW_TOPIC:
            {
                return state
            }
        case UPDATE_INFO:
            return state
        case EDIT_INFO:
            let obj = action.payload
            let res = [...state.topic]
            console.log("obj",obj)
            console.log("res",res)
            let updateDel = res.filter(item => item.id != obj.id)
            console.log("up",updateDel)
            return {
                ...state,topic:[...updateDel,obj],duplicate:[...updateDel,obj]
            }
        case FILTER:
            // console.log(action.payload)
            let resFilter = [...state.topic]
            let newRow = resFilter.filter(item => item.category == action.payload)
            return{
                ...state,duplicate:newRow
            }
        default:
            return state
    }
}

export default Reducer