const initialState={
    response:{}
}
const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_RES":
            return {
                ...state,
                response:action.payload
            }
        default:return state
    }
}

export default Reducer