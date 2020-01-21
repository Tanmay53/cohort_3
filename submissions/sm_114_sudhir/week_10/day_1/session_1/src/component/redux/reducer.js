import React from 'react'
import {
    INCRE_X, 
    DECRE_X, 
    MUL_X,
    DIV_X,
    REM_X,
    UPD_X} from './type'

const initialState = {
    countOfX : 0,
}


const addReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case INCRE_X : return {
            countOfX : state.countOfX + Number(action.userInput)
        }
        case DECRE_X : return {
            countOfX : state.countOfX - Number(action.userInput)
        }
        case MUL_X : return {
            countOfX : state.countOfX * Number(action.userInput)
        }
        case DIV_X : return {
            countOfX : state.countOfX / Number(action.userInput)
        }
        case REM_X : return {
            countOfX : state.countOfX % Number(action.userInput) 
        }
        case UPD_X : 
            if(action.userInput % 2 == 0){
                return {
                countOfX : state.countOfX + 1  
                }
            }else{
                return {
                    countOfX : state.countOfX + 2  
                }
            }
        default : return state
    }
}


export default addReducer;