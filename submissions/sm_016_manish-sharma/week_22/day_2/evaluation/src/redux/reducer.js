import {ADD_ARTIST, ADD_ALBUM, EDIT, DELETE, FETCH_SUCCESS_LOGIN,FETCH_SUCCESS_REGISTER} from './actions'

var initialState={
    artistsList:['Eminem','Linkin Park','Justin Timberlake','Taylor Swift','Ed Sheeran'],
    albumsList:[{artist:'Eminem',album:'Recovery',year:2010},
                {artist:'Linkin Park',album:'Hybrid Theory',year:2001},
                {artist:'Justin Timberlake',album:'The T20 Experience',year:2013},
                {artist:'Taylor Swift',album:'Nighteen Eighty Nine',year:2014},
                {artist:'Linkin Park',album:'Minutes to Midnight ',year:2007},
                {artist:'Ed Sheeran',album:'Scorpion',year:2017},
                {artist:'Eminem',album:'The Eminem Show',year:2002},
                {artist:'Justin Timberlake',album:'Millenium',year:1992},
                {artist:'Taylor Swift',album:'Taylor Swift',year:2009},
            ],
    notLoggedIn:true,
    notReg:true
}

export const reducers=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_ARTIST:
            let artists= state.artistsList
            for(let i=0;i<artists.length;i++){
                if(action.payload===artists[i]){
                    alert('This artist is already present in the list')
                    return state
                }
            }
            alert('Artist successfully added')
            return {...state,
                artistsList:[...artists,action.payload]
            }
        case ADD_ALBUM:
            let albums= state.albumsList
            for(let i=0;i<albums.length;i++){
                if(action.payload.album===albums[i].album){
                    alert('This album is already present in the list')
                    return state
                }
            }
            alert('Album successfully added')
            return {...state,
                albumsList:[...albums,action.payload]
            }
        case EDIT:
            let albums2= state.albumsList
            for(let i=0;i<albums2.length;i++){
                if(action.payload.initialEntry.album===albums2[i].album){
                    albums2[i]=action.payload.newEntry
                }
            }
            alert('Successfully Edited')
            return {...state,
                albumsList:albums2
            }
        case DELETE:
            let albums3=state.albumsList
            let newAlbumList=[]
            for(let i=0;i<albums3.length;i++){
                if(action.payload!==albums3[i].album){
                    newAlbumList.push(albums3[i])
                }
            }
            return {...state,
                albumsList:newAlbumList
            }
        case FETCH_SUCCESS_LOGIN:
            return {...state,
                notLoggedIn:action.payload.error
            }
        case FETCH_SUCCESS_REGISTER:
            return {...state,
                notReg:action.payload.error
            }
        default:
            return state
    }
}