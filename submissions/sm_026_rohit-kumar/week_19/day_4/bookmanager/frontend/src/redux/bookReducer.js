const initBook = {
    author_store: [],
    publisher_store: [],
    category_store: []
}

const bookReducer = (state = initBook, action) => {
    switch (action.type) {
        case 'ADD_AUTHOR':
            return {
                ...state,
                author_store: [...state.author_store, action.payload]
            }
        case 'ADD_PUBLISHER':
            return {
                ...state,
                publisher_store: [...state._store, action.payload]
            }
        case 'ADD_CATEGORY':
            return {
                ...state,
                category_store: [...state.author_store, action.payload]
        }

        // delete

        case 'DELETE_AUTHOR':
            return {
                ...state,
                author_store: [...state.author_store, action.payload]
            }
        case 'DELETE_PUBLISHER':
            return {
                ...state,
                publisher_store: [...state.author_store, action.payload]
            }
        case 'DELETE_CATEGORY':
            return {
                ...state,
                category_store: [...state.author_store, action.payload]
            }
        
        // update
        case 'UPDATE_AUTHOR':
            return {
                ...state,
                author_store: [...state.author_store, action.payload]
            }
        case 'UPDATE_PUBLISHER':
            return {
                ...state,
                publisher_store: [...state.author_store, action.payload]
            }
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                category_store: [...state.author_store, action.payload]
            }
    }
    
}