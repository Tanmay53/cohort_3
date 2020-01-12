import {
    INCRE_X, 
    DECRE_X, 
    MUL_X,
    DIV_X,
    REM_X,
    UPD_X} from './type'

export const addCount = (userInput) => {
    return {
        type : INCRE_X,
        userInput
    }
}

export const subCount = (userInput) => {
    return {
        type : DECRE_X,
        userInput
    }
}

export const mulCount = (userInput) => {
    return {
        type : MUL_X,  
        userInput,  
    }
}

export const divCount = (userInput) => {
    return {
        type : DIV_X,  
        userInput,  
    }
}

export const remCount = (userInput) => {
    return {
        type : REM_X,  
        userInput,  
    }
}

export const updByEvenOdd = (userInput) => {
    return {
        type : UPD_X,  
        userInput,  
    }
}