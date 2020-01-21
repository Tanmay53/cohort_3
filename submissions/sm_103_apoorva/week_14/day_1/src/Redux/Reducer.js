import {LOGIN,ADD_VEHICLE,DELETE_VEHICLE,UPDATE_INFO,EDIT_INFO,MILAGE_FILTER, SHOW_VEHICLE} from './Action'

const initialState = {
    userName : "admin",
    password : "admin",
    vehicle : [],
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
        case ADD_VEHICLE:
            // console.log(state.vehicle)
            if(action.payload != "")
            {
                // console.log(action.payload)
                let obj = action.payload
                return {
                    ...state,vehicle:[...state.vehicle,obj],duplicate:[...state.duplicate,obj]
                }
            }
        case SHOW_VEHICLE:
            {
                return state
            }
        case DELETE_VEHICLE:
            alert(action.payload)
            let arr = [...state.duplicate]
            let updatedList = arr.filter(item => item.id != action.payload) 
            return {...state,duplicate: updatedList}
        case UPDATE_INFO:
            return state
        case EDIT_INFO:
            let obj = action.payload
            let res = [...state.duplicate]
            console.log("obj",obj)
            console.log("res",res)
            let updateDel = res.filter(item => item.id != obj.id)
            console.log("up",updateDel)
            return {
                ...state,vehicle:[...updateDel,obj],duplicate:[...updateDel,obj]
            }
        case MILAGE_FILTER:
            // console.log(action.payload)
             return state
        default:
            return state
    }
}

export default Reducer