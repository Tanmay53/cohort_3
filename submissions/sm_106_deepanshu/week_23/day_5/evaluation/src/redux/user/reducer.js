import {
  ADD_ARTIST,
  ADD_ALBUM
} from './action'

const initialState = {
  artist: [],
  album: []
}

const userReducer = (state = initialState, action) => {
  console.log(state.artist)
  switch (action.type) {
    case ADD_ARTIST:
      return {
        ...state,
        artist: [...state.artist, action.payload]
      }
    case ADD_ALBUM:
      console.log(action.payload)
      return {
        ...state,

      }
    default:
      return state;
  }
}

export default userReducer