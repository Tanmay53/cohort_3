import { SEND_TOKEN, 
    ADD_ARTIST, 
    ADD_ALBUM, 
    DELETE_ALBUM, 
    UPDATE_ALBUM } from './action'


const initialState = {
    loginData : {token : '', error : true},
    artistData : ["The Who","Pink Floyd","The Beatles"],
    albumData : [
        {"artist" : "The Who", "album": "Who's Next", "year" : 1982},
        {"artist" : "Pink Floyd", "album": "Crazy Diamond", "year" : 1973},
        {"artist" : "The Beatles", "album": "Let IT Be", "year" : 1975}
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_TOKEN:
            if(action.payload.error === false){
                return {
                    ...state,
                    loginData : action.payload
                }
            }
            break;

        case ADD_ARTIST:
            console.log(action.payload)
            return {
                ...state,
                artistData : [...state.artistData, action.payload]
            };

        case ADD_ALBUM:
            console.log(action.payload)
            return {
                ...state,
                albumData : [...state.albumData, action.payload]
            };

        case DELETE_ALBUM:
            console.log(action.payload)
            return {
                ...state,
                albumData : state.albumData.filter((item, index)=> index != action.payload)
            };

        case UPDATE_ALBUM:
            console.log(action.payload)
            return {
                ...state,
                albumData : state.albumData.map((item,index)=> index == action.payload.id ? action.payload.obj : item)
            };

        default :
            return state;
    }
}

export default reducer;