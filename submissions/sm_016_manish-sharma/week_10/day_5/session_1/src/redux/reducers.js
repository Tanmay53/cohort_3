import {FETCH_REQUEST,FETCH_GET_SUCCESS,FETCH_POST_SUCCESS1,FETCH_POST_SUCCESS2} from './actions'

var initialState={
    dataLogin:{error:true},
    dataRegister:{error:true},
    info:[]
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_REQUEST:
            return state
        case FETCH_POST_SUCCESS1:
            console.log('action.payload',action.payload)
            return {
                ...state,
                dataLogin:{error:action.payload.data.error},
                info:[action.payload.info]
                }
        case FETCH_POST_SUCCESS2:
            return {
                ...state,
                dataRegister:{error:action.payload.error}
                }
        default:
            return state
    }
}