
const userLogin = (state, props) => {
    return {
        type: 'USER_LOGIN',
        payload: {
            state,
            props
         }
    }
}

const addTopic = (obj) => {
    return {
        type: 'ADD_TOPIC',
        payload: obj
    }
}

const sortAscTitle = () => {
    return {
        type: 'SORT_ASC_TITLE'
    }
}

const sortDescTitle = () => {
    return {
        type: 'SORT_DESC_TITLE'
    }
}

const sortAscDate = () => {
    return {
        type: 'SORT_ASC_DATE'
    }
}

const sortDescDate = () => {
    return {
        type: 'SORT_DESC_DATE'
    }
}

const editTopic = (item, id) => {
    return {
        type: 'EDIT_TOPIC',
        payload: item, id
    }
}

export {userLogin, addTopic, sortAscTitle, sortDescTitle, sortAscDate, sortDescDate, editTopic}