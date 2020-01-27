import { BOOK_QUOTES } from './type'

const initialState = {
    bookTrip : [],
    cardData : [
        {
            img:'',
            carName:'',
            brand:'',
            rate:''
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BOOK_QUOTES : return {
            ...state,
            bookTrip: [...state.bookTrip, action.payload]
        }
        default : return state
    }
}

export { reducer }