export function increment(x) {
    return {
        type: "INCREMENT",
        payload: x
    }
}

export function decrement(x) {
    return {
        type: "DECREMENT",
        payload: x
    }
}
export function incrementOddEven(x) {
    return {
        type: "INCREMENT_ODD_EVEN",
        payload: x
    }

}

export function multiplyCounter(x) {
    return {
        type: "MULTIPLY_COUNTER",
        payload: x
    }
}

export function divideCounter(x) {
    return {
        type: "DIVIDE_COUNTER",
        payload: x
    }
}

export function remainder(x) {
    return {
        type: "REMAINDER",
        payload: x
    }
}