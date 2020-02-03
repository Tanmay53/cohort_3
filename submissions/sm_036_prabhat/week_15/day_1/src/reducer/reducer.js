import { CHECK_AUTH, ADD_NEW_TOPIC, DELETE_ITEM, SORT_ITEM, FILTER_ITEM, ADD_COMMENT } from './action';

const initalState = {
    isLogin: false      ,
    initialData: [],
    mainData: []
}

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case CHECK_AUTH:
            if (action.payload.username === "admin" && action.payload.password === "admin") {
                return {
                    ...state,
                    isLogin: true
                }
            }
            break;

        case ADD_NEW_TOPIC:
            return {
                ...state,
                mainData: [...state.mainData, action.payload.data],
                initialData: [...state.initialData, action.payload.data]
            };

        case DELETE_ITEM:
            return {
                ...state,
                mainData: state.mainData.filter((item, index) => index !== action.payload)
            }

        case SORT_ITEM:
            if (action.payload === 'acc')
                return {
                    ...state,
                    mainData: state.mainData.sort((a, b) => a.title < b.title ? -1 : 1)
                }
            else if (action.payload === 'dec')
                return {
                    ...state,
                    mainData: state.mainData.sort((a, b) => a.title > b.title ? -1 : 1)
                }
            else if (action.payload === 'Accending')
                return {
                    ...state,
                    mainData: state.mainData.sort((a, b) => a.createdTime < b.createdTime ? -1 : 1)
                }
            else if (action.payload === 'Decending')
                return {
                    ...state,
                    mainData: state.mainData.sort((a, b) => a.createdTime > b.createdTime ? -1 : 1)
                }
            break;

        case FILTER_ITEM:
            if (action.payload === "All") {
                return {
                    ...state,
                    mainData: [...state.initialData]
                }
            }
            else
                return {
                    ...state,
                    mainData: state.initialData.filter((item) => item.category === action.payload)
                }

        case ADD_COMMENT:

            let idx = action.payload.idx;
            let comment = action.payload.comment;
            // console.log("reducer", comment, idx)

            let pos = 0

            state.initialData.forEach((item, index) => {
                if (item.createdTime === idx) {
                    pos = index
                }
            })

            // console.log(pos)

            let newState = state
            console.log("newState", newState)

            for (let i = 0; i < newState.initialData.length; i++) {
                if (i == pos) {
                    newState.initialData[i]["commentData"].push(comment)
                }
            }
            return newState

        default:
            return state
    }
}

export default reducer