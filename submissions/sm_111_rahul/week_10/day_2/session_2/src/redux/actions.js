/** @format */
export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const EDIT_ITEM = "EDIT_ITEM";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const addItem = payload => ({
  type: ADD_ITEM,
  payload
});

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload
});

export const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload
});

export const removeCategory = payload => ({
  type: REMOVE_CATEGORY,
  payload
});

export const editItem = (payload, id) => ({
  type: EDIT_ITEM,
  payload,
  id
});

export const filterProducts = payload => ({
  type: FILTER_PRODUCTS,
  payload
});
