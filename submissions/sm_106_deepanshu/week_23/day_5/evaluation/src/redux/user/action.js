export const ADD_ARTIST = 'ADD_ARTIST'
export const ADD_ALBUM = 'ADD_ALBUM'
export const EDIT_ALBUM = 'EDIT_ALBUM'
export const DELETE_ALBUM = 'DELETE_ALBUM'

export const addArtist = (payload) => {
  return {
    type: ADD_ARTIST,
    payload
  }
}

export const addAlbum = (payload) => ({
  type: ADD_ALBUM,
  payload
})

export const editAlbum = (payload) => ({
  type: EDIT_ALBUM,
  payload
})

export const deleteAlbum = (payload) => ({
  type: DELETE_ALBUM,
  payload
})

