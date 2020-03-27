export const ADD_ARTIST = 'ADD_ARTIST'
export const ADD_ALBUM = 'ADD_ALBUM'

export const addArtist = (payload) => {
  // console.log(payload);

  return {
    type: ADD_ARTIST,
    payload
  }
}

export const addAlbum = (payload) => ({
  type: ADD_ALBUM,
  payload
})
