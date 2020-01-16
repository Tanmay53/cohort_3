import {ADD_ITEM,DELETE_ITEM,STRIKE,PREVENT} from './Action'

const initialState = {
    todoList : [],
    add : false
}

const Reducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case ADD_ITEM:
            if(action.payload !== "")
            {
                const newItem = {
                    id : Date.now(),
                    value : action.payload,
                    isDone : false
                }
                return {...state,todoList:[...state.todoList,newItem],add:false}
            }
        case PREVENT:
            return {...state,add:true}
        case STRIKE:
            // console.log(action.payload)
            let list = [...state.todoList]
            list.map(ele => {
                if(ele.id == action.payload)
                {
                    console.log(ele.id)
                    ele.isDone = true
                    return ele
                }
                else
                {
                    return ele
                }
            })
            // console.log(list)
            return {...state,todoList:list}
        case DELETE_ITEM:
            // console.log(action.payload)
            let arr = [...state.todoList]
            let updatedList = arr.filter(item => item.id != action.payload) 
            return {...state,todoList:updatedList} 
        default:
            return state
    }
}

export default Reducer