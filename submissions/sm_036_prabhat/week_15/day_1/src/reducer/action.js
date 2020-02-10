export const CHECK_AUTH = "CHECK_AUTH";
export const ADD_NEW_TOPIC = "ADD_NEW_TOPIC";
export const DELETE_ITEM = "DELETE_ITEM";
export const SORT_ITEM = "SORT_ITEM";
export const FILTER_ITEM = 'FILTER_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT'

export const checkAuth = (data)=> ({
    type : CHECK_AUTH,
    payload: {
        username : data.username,
        password : data.password,
    }
});

export const AddNewTopics = (d) => ({
    type : ADD_NEW_TOPIC,
    payload : {
        data : d
    }
})

export const DeleteItem = (index) => ({
    type : DELETE_ITEM ,
    payload : index
})

export const SortItem = (data) => ({
    type : SORT_ITEM ,
    payload : data
})

export const FilterItem = (data) => ({
    type: FILTER_ITEM,
    payload : data
})

export const addComment = (data) => ({
    type: ADD_COMMENT,
    payload : data
})
