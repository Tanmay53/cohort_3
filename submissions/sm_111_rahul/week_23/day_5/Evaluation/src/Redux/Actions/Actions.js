/** @format */
import {
  ADD_ARTIST,
  ADD_ALBUM,
  FILTER_ARTIST,
  DELETE_ALBUM,
  EDIT_ALBUM,
  CHANGE_PAGE_NO,
  CREATE_PAGES,
  SORT_ALBUMS
} from "../actionTypes";

export const addArtist = payload => ({
  type: ADD_ARTIST,
  payload
});

export const addAlbum = payload => ({
  type: ADD_ALBUM,
  payload
});

export const filterArtist = payload => ({
  type: FILTER_ARTIST,
  payload
});

export const deleteAlbum = payload => ({
  type: DELETE_ALBUM,
  payload
});

export const editAlbum = payload => ({
  type: EDIT_ALBUM,
  payload
});

export const changePage = payload => ({
  type: CHANGE_PAGE_NO,
  payload
});

export const createPages = () => ({
  type: CREATE_PAGES
});

export const sortAlbums = (payload) => ({
  type: SORT_ALBUMS,
  payload
});
