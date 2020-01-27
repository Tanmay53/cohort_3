const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const INITIATE = "INITIATE";
const ODD = "ODD";
const DIVIDE = "DIVIDE"
const MULTIPLY = "MULTIPLY"
const REMINDER = "REMINDER"

const incrementCounter = (amount) => {
    return {
        type: INC_COUNTER,
        amount
    }
}

const decrementCounter = (amount) => {
    return {
        type: DEC_COUNTER,
        amount
    }
}
const initiate = (amount) => {
    return {
        type: INITIATE,
        amount
    }
}
const odd = (amount) => {
    return {
        type: ODD,
        amount
    }
}
const multiply = (amount) => {
    return {
        type: MULTIPLY,
        amount
    }
}
const divide = (amount) => {
    return {
        type: DIVIDE,
        amount
    }
}
const reminder = (amount) => {
    return {
        type: REMINDER,
        amount
    }
}

export { incrementCounter, decrementCounter, initiate, odd, divide, reminder, multiply }