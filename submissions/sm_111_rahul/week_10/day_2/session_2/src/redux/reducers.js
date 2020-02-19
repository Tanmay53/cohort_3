/** @format */
import { ADD_ITEM } from "./actions";
import { REMOVE_ITEM } from "./actions";
import { ADD_CATEGORY } from "./actions";
import { REMOVE_CATEGORY } from "./actions";
import { EDIT_ITEM } from "./actions";
import { FILTER_PRODUCTS } from "./actions";

let initialState = {
  products: [
    {
      id: 1,
      name: "Bat",
      price: 1000,
      desc: "",
      avatar: "/placeimg_400_300_tech (1).jpg",
      category: "Sports",
      quantity: 6
    },
    {
      id: 2,
      name: "Ball",
      price: 100,
      desc: "",
      avatar: "/placeimg_400_300_tech.jpg",
      category: "Sports",
      quantity: 3
    },
    {
      id: 3,
      name: "Jeans",
      price: 1500,
      desc: "",
      avatar: "/placeimg_400_300_tech (3).jpg",
      category: "Clothes",
      quantity: 2
    },
    {
      id: 4,
      name: "Shirt",
      price: 400,
      desc: "",
      avatar: "/placeimg_400_300_tech (4).jpg",
      category: "Clothes",
      quantity: 4
    },
    {
      id: 5,
      name: "Iphone",
      price: 10000,
      desc: "",
      avatar: "/placeimg_400_300_tech (5).jpg",
      category: "Electronics",
      quantity: 7
    },
    {
      id: 6,
      name: "Headphone",
      price: 500,
      desc: "",
      avatar: "/placeimg_400_300_tech (6).jpg",
      category: "Electronics",
      quantity: 3
    }
  ],
  cartInfo: [],
  productCategory: [
    { id: 1, categoryName: "Sports" },
    { id: 2, categoryName: "Electronics" },
    { id: 3, categoryName: "Clothes" }
  ],
  filteredProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    }
    case ADD_CATEGORY: {
      return {
        ...state,
        productCategory: [...state.productCategory, action.payload]
      };
    }
    case REMOVE_ITEM: {
      const productList = state.products.filter(ele => {
        return ele.id != action.payload;
      });
      return {
        ...state,
        products: [...productList]
      };
    }
    case REMOVE_CATEGORY: {
      const categoryList = state.productCategory.filter(ele => {
        return ele.id != action.payload;
      });
      return {
        ...state,
        productCategory: [...categoryList]
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        products: state.products.map(ele => {
          return ele.id === action.id ? action.payload : ele;
        })
      };
    }
    case FILTER_PRODUCTS: {
      let filteredItems = [];
      if (action.payload === "all") {
        filteredItems = [...state.products];
      } else {
        filteredItems = state.products.filter(ele => {
          return ele.category === action.payload;
        });
      }
      return {
        ...state,
        filteredProducts: [...filteredItems]
      };
    }

    default:
      return state;
  }
};

export default reducer;
