export const INC_COUNTER = "INC_COUNTER"
export const DEC_COUNTER = "DEC_COUNTER"
export const INC_ODD_EVEN = "INC_ODD_EVEN"
export const MUL = "MUL"
export const DIV = "DIV"
export const REM = "REM"


export const incrementCounter = (amount) => {
    return{
        type : INC_COUNTER,
        amount
    }
}

export const decrementCounter = (amount) => {
    return{
        type : DEC_COUNTER,
        amount
    }
}

export const incrementIfOddEven = (amount) => {
    console.log(amount)
    if(amount === 0){
        return {
            type : INC_ODD_EVEN,
            amount : 0
        }
    }
    if(amount % 2 === 0){
        return{
            type : INC_ODD_EVEN,
            amount : 2
        }
    }
    else {
        return{
            type : INC_ODD_EVEN,
            amount : 1
        }
    }
}

export const multiply = (amount) => {
    return{
        type : MUL,
        amount
    }
}

export const divide = (amount) => {
    if(amount === 0){
        alert("Not possible")
        return {
            type : DIV,
            amount : 1
        }
    }  
    else {
        return{
            type : DIV,
            amount
        }
    } 
}

export const remainder = (amount) => {
    if(amount === 0){
        alert("Not possible")
        return {
            type : REM,
            amount : 1
        }
    }  
    else{
        return{
            type : REM,
            amount
        }
    }
    
}