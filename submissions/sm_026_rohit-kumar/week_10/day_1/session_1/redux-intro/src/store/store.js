import {createStore} from 'redux'

const initState = {
    count: 0,
    rem:0
}

const myReducer = (state = initState, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'INCR':
            newState.count += action.payload.value
            break 
        case 'DECR':
            newState.count -= action.payload.value
            break 
        case 'MUL':
            newState.count *= action.payload.value
            break
        case 'DIV':
            newState.count /= action.payload.value
            newState.rem = newState.count % action.payload.value
    }
    return newState
}

const store = createStore(myReducer)

// actions 
const actionIncrement = (num) => ({
    type: 'INCR',
    payload: {
        value: num
    }
})

const actionDecrement = (num) => ({
    type: 'DECR',
    payload: {
        value: num
    }
})

const actionMultiply = (num) => ({
    type: 'MUL',
    payload: {
        value: num
    }
})

const actionDivide = (num) => ({
    type: 'DIV',
    payload: {
        value: num
    }
})


export {store, actionIncrement, actionDecrement, actionMultiply, actionDivide}