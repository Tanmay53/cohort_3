export const increment = (n) => {
    // console.log(n)
    return {
        type: "Increment",
        payload: n
    }
}

export const decrement = (n) => {
    return {
        type: "Decremenent",
        payload: n
    }
}

export const multiply = (n) => {
    return {
        type: "Multiply",
        payload: n
    }
}

export const divide = (n) => {
    return {
        type: "Divide",
        payload: n
    }
}

export const add = (value) => {
    return {
        type: "Add",
        payload: value
    }
}