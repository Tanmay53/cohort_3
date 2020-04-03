import {ADD_PRODUCTS,ADD_CATEGORY,DELETE_PRODUCT, EDIT_PRODUCT, ADD_TO_CART,REMOVE_FROM_CART,ADD_QUANTITY_CART,SUBTRACT_QUANTITY_CART, ORDER_DETAILS} from "./action"

const initialState = {
  products : [],
  categories : [],
  cart : [],
  allOrders : []
}


const reducer = (state = initialState,action) =>{

  switch (action.type) {
    case ADD_PRODUCTS :
      return {
        ...state,
        products : [...state.products,action.payload]
      }

    case ADD_CATEGORY :
      return {
        ...state,
        categories : [...state.categories,action.payload]
      }

    case DELETE_PRODUCT :
      let productsAfterDeletion = state.products.filter(el=>el.id!==action.payload)
      return {
        ...state,
        products : productsAfterDeletion
      }

    case EDIT_PRODUCT :
      let productsAfterEdit = state.products.map(
        el => el.id===action.payload.id ?
        {
          ...el,
          name : action.payload.name,
          cost : action.payload.cost,
          description : action.payload.description,
          category : action.payload.category
        }
        :
        el 
      )
      return {
        ...state,
        products : productsAfterEdit
      }

    case ADD_TO_CART :
      let productAddedToCart = state.products.find(el=>el.id===action.payload)
      return {
        ...state,
        cart : [...state.cart,productAddedToCart]
      }

    case REMOVE_FROM_CART :
      let cartAfterRemoval = state.cart.filter(el=>el.id!==action.payload)
      return {
        ...state,
        cart : cartAfterRemoval
      }

    case ADD_QUANTITY_CART :
      let addQuantityCartItem = state.cart.map(
        el => el.id === action.payload
        ?
        {
          ...el,
          quantity : el.quantity+1
        }
        :
        el
      )
      return {
        ...state,
        cart : addQuantityCartItem
      }

    case SUBTRACT_QUANTITY_CART :

      let itemWhoseQuantityNeedsToBeSubtracted = state.cart.find(prod=>prod.id===action.payload)
            
      if (itemWhoseQuantityNeedsToBeSubtracted.quantity===1){
        let updatedCartProductsList = state.cart.filter(item=>item.id!==action.payload)
        return {
          ...state,
          cart : updatedCartProductsList,
        }
      }

      else {
        let subtractQuantityCartItem = state.cart.map(
          el => el.id === action.payload
          ?
          {
            ...el,
            quantity : el.quantity-1
          }
          :
          el
        )
        return {
          ...state,
          cart : subtractQuantityCartItem
        }
      }

    case ORDER_DETAILS :
      return {
        ...state,
        allOrders : [...state.allOrders,action.payload],
        cart : []
      }

    default :
      return state
  }
}

export default reducer
