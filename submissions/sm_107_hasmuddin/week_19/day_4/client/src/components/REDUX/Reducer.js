const initialState = {
    data: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                data: action.data
            }
        default: return state
    }
}