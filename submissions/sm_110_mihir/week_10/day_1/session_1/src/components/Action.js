const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
const MODULUS = "MODULUS";

const incrementCounter = amount => {
    console.log(amount);
    return {
        type: INC_COUNTER,
        payload: amount
    };
};
const decrementCounter = amount => {
    return {
        type: DEC_COUNTER,
        payload: amount
    };
};

const oddEvenIncrement = value => {
    if (value % 2 === 0)
        return {
            type: INC_COUNTER,
            payload: 2
        };
    else
        return {
            type: INC_COUNTER,
            payload: 1
        };
};

const multiply = amount => {
    return {
        type: MULTIPLY,
        payload: amount
    };
};

const divide = amount => {
    return {
        type: DIVIDE,
        payload: amount
    };
};

const modulus = amount => {
    return {
        type: MODULUS,
        payload: amount
    };
};
export {
    incrementCounter,
    decrementCounter,
    INC_COUNTER,
    DEC_COUNTER,
    oddEvenIncrement,
    MULTIPLY,
    DIVIDE,
    MODULUS,
    multiply,
    divide,
    modulus
};
