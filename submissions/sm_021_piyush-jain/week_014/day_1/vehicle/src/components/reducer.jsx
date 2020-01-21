import React from 'react'
import Edit from './Edit'
const LOG = "LOG"
const DEL = "DEL"
const ADD = "ADD"
const FILL = "FILL"
const EDIT="EDIT"
const initialState = {
    isAuth: false,
    products: [],
    sorted: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG:
            return ({
                ...state,
                isAuth: !state.isAuth
            })
        case ADD:
            return ({
                ...state,
                products: [...state.products, action.data],
                sorted: [...state.products]
            })
        case DEL:
            return ({
                ...state,
                sorted: state.products.filter(item => item.id != action.id)
            })
        case FILL:
                if(action.value=="first")
                {
                    return{
                        ...state,
                        sorted:state.products.filter(item=>item.mileage<=10)
                    }
                }
                else if(action.value=="second")
                {
                    return{
                        ...state,
                        sorted:state.products.filter(item=>item.mileage<=20)
                    }
                }
                else if(action.value=="third")
                {
                    return{
                        ...state,
                        sorted:state.products.filter(item=>item.mileage<=30)
                    }
                }
                else 
                {
                    return{
                        ...state,
                        sorted:state.products.filter(item=>item.mileage>=30)
                    }
                }
        // case EDIT:
        //         <Edit props={action.value}/>        
        default:
            return state
    }
}
export default reducer
