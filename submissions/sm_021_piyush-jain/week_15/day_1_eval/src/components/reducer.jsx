import React from 'react'
import Edit from './Edit'
const LOG = "LOG"
const DEL = "DEL"
const ADD = "ADD"
const FILL = "FILL"
const EDIT = "EDIT"
const SORT="SORT"
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
        case SORT:
            if(action.data=="asc")
            {
                return({
                    ...state,
                    sorted:[...state.sorted,state.products],                  
                    sorted:state.sorted.sort((a,b)=>Number(a.dateValue)-Number(b.dateValue))
                })
            }
            else if(action.data=="desc")
            {
                return({
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted:state.sorted.sort((a,b)=>Number(b.dateValue)-Number(a.dateValue))
                })
            }
            else if(action.data==="tasc")
            {
                console.log(action.data)
                return({
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted:state.sorted.sort((a,b)=>(a.title>b.title)?1:-1)
                })
            }
            else
            {
                return({
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted:state.sorted.sort((a,b)=>(a.title>b.title)?-1:1)
                })
            }
        case EDIT:
            return ({
                ...state,
                products: state.products.map((ele)=>(ele.id==action.id)?action.value:ele),
                sorted: state.sorted.map((ele)=>(ele.id==action.id)?action.value:ele),
            })
        case DEL:
            return ({
                ...state,
                sorted: state.sorted.filter(item => item.id != action.id)
            })
        case FILL:
            if (action.value == "rand") {
                return {
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted: state.products.filter(item => item.category=="Random")
                }
            }
            else if (action.value == "gen") {
                return {
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted: state.products.filter(item => item.category=="General")
                }
            }
            else if (action.value == "prog") {
                return {
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted: state.products.filter(item => item.category=="Programming")
                }
            }
            else if (action.value == "algo"){
                return {
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted: state.products.filter(item => item.category=="Algorithm")
                }
            }
            else{
                console.log(action.value)
                return {
                    ...state,
                    sorted:[...state.sorted,state.products],
                    sorted: state.products.filter(item => item.category=="Suggestions")
                }
            }
        default:
            return state
    }
}
export default reducer
