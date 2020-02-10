export const SHOW_ROOMS = "SHOW_ROOMS";
export const BOOK_ROOM = "BOOK_ROOM";
export const LOGIN_FORM = "LOGIN_FORM";
export const FILTER_FLOOR = "FILTER_FLOOR";

export const showRooms = payload => ({
  type: SHOW_ROOMS,
  payload
});

export const bookRoom = (payload, totalPrice) => ({
  type: BOOK_ROOM,
  payload,
  totalPrice
});
export const loginForm = payload => ({
  type: LOGIN_FORM,
  payload
});

export const filterFloor = payload => ({
  type: FILTER_FLOOR,
  payload
});
