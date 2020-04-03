import uuid from "react-uuid"

export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const ADD_QUANTITY_CART = "ADD_QUANTITY_CART"
export const SUBTRACT_QUANTITY_CART = "SUBTRACT_QUANTITY_CART"
export const ORDER_DETAILS = "ORDER_DETAILS"

export const addProducts = (name,cost,description,category) =>({
  type : ADD_PRODUCTS,
  payload : {
    id : uuid(),
    name : name,
    cost : cost,
    description : description,
    category : category,
    quantity : 1,
    imgUrl : `https://via.placeholder.com/300.jpg/09f/fff
    C/O https://placeholder.com/#How_To_Set_Image_Size`
  }
})

export const addCategory = (item) =>({
    type : ADD_CATEGORY,
    payload : item
})

export const deleteProduct = (id) =>({
  type : DELETE_PRODUCT,
  payload : id
})

export const editProduct = (id,name,cost,description,category) =>({
  type : EDIT_PRODUCT,
  payload : {
    id : id,
    name : name,
    cost : cost,
    description : description,
    category : category
  }
})

export const addToCart = (id) =>{
  return {
    type : ADD_TO_CART,
    payload : id
  }
}

export const removeFromCart = (id) =>{
  return {
    type : REMOVE_FROM_CART,
    payload : id
  }
}

export const addQuantityCart = (id) =>{
  return {
    type : ADD_QUANTITY_CART,
    payload : id
  }
}

export const subtractQuantityCart = (id) =>{
  return {
    type : SUBTRACT_QUANTITY_CART,
    payload : id
  }
}

export const orderDetails = (order,customerName,contact,paymentDetails,totalPrice) => {
  return {
    type : ORDER_DETAILS,
    payload : {
      orderId : uuid(),
      order : order,
      customerName : customerName,
      contact : contact,
      paymentDetails : paymentDetails,
      totalPrice : totalPrice
    }
  }
}