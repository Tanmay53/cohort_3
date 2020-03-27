import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    FILTER_PRODUCT_REQUEST,
    FILTER_PRODUCT_SUCCESS,
    FILTER_PRODUCT_FAILURE,
    SORT_PRODUCT_REQUEST,
    SORT_PRODUCT_SUCCESS,
    SORT_PRODUCT_FAILURE,
  } from "./type";
  
  const initState = {
    isLoading: true,
    error: false,
    message: '',
    products: [],
    totalProducts: 0
  };
  
const productReducer = (state = initState, action) => {
    switch (action.type) {
      //ADD PRODUCT
      case ADD_PRODUCT_REQUEST:
        return {
          isLoading: true,
          error: false
        }

      case ADD_PRODUCT_SUCCESS:
        return {
          isLoading: false,
          message: action.payload.message
        }

      case ADD_PRODUCT_FAILURE:
        return {
          isLoading: false,
          error: true
        }

      // get product
      case GET_PRODUCT_REQUEST:
        return {
          isLoading: true,
          error: false
        }

      case GET_PRODUCT_SUCCESS:
        return {
          isLoading: false,
          products: action.payload.products,
          totalProducts: action.payload.totalRows[0].count
        }

      case GET_PRODUCT_FAILURE:
        return {
          isLoading: false,
          error: true
        }
      
      // FILTER PRODUCT
      case FILTER_PRODUCT_REQUEST:
        return {
          isLoading: true,
          error: false
        }

      case FILTER_PRODUCT_SUCCESS:
        return {
          isLoading: false,
          products: action.payload.productFiltered,
        }

      case FILTER_PRODUCT_FAILURE:
        return {
          isLoading: false,
          error: true
        }
      
      // SORT PRODUCT
      case SORT_PRODUCT_REQUEST:
        return {
          isLoading: true,
          error: false
        }

      case SORT_PRODUCT_SUCCESS:
        return {
          isLoading: false,
          products: action.payload.sortedProduct,
        }

      case SORT_PRODUCT_FAILURE:
        return {
          isLoading: false,
          error: true
        }
      
      default:
        return state;
    }
};
  
  export default productReducer;