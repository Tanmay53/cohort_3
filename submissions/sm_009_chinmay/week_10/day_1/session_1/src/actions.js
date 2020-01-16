const incrementCounter = (input) => {
    console.log('increment counter')
    return {
        type: 'INC_COUNTER',
        input
    }
}

const decrementCounter = (input) => {
    return {
        type: 'DEC_COUNTER',
        input
    }
}

const multiplyCounter = (input) => {
    return {
        type: 'MULTIPLY_COUNTER',
        input
    }
}

const divideCounter = (input) => {
    return {
        type : 'DIVIDE_COUNTER',
        input
    }
}

const modCounter = (input) => {
    return {
        type : 'MOD_COUNTER',
        input
    }
}

export {incrementCounter, decrementCounter, multiplyCounter, divideCounter, modCounter}