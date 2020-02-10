// const countReducers = (state = 0, action) => {
//     switch(action.type){
//         case "Increment" :
//             console.log(action)
//             return state + action.payload;
//         case "Decremenent" :
//             console.log(action)

//             return state - action.payload;
//         default:
//             return state;
//     }
// }

// export default countReducers;

const initialState = {
    count: 0
}

const countReducers = (state = initialState, action) => {
    switch (action.type) {
        case "Increment":
            if (action.payload % 2 === 0){
                console.log("even")
                return {
                    count: state.count + 2,
                }
            }
            else{
                console.log("Odd")
                return {
                    count: state.count + 1,
                }
            }

        case "Decremenent":
            return {
                count: state.count - action.payload,
            }

        case "Add":
            return {
                count: state.count + action.payload,
            }

        case "Multiply" : 
            return {
                count : state.count * action.payload
            }

        case "Divide" : 
            return {
                count : state.count / action.payload
            }
            
        default:
            return state;
    }
}

export default countReducers;