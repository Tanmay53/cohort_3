const INC_COUNTER = "INC_COUNTER"  //string name for type of action performed

const DEC_COUNTER =  "DEC_COUNTER"
const Update = 'Update'
const Multiply = 'Multiply'


const incrementCounter = () => {
    console.log('incrementing counter ' )
    return {
        type:INC_COUNTER,
    }
}

const decrementCounter = () => {
    console.log('decrementing counter ',)
    return {
        type:DEC_COUNTER,
    }
}

const update = (value) =>{
    console.log('updating value')
    return {
        type:Update,
        value
    }
}

const multiplyCounter = () =>{
    return {
        type:Multiply
    }
}

export {incrementCounter,decrementCounter,update,multiplyCounter}