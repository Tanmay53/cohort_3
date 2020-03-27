const initialState = {
    loginStatus: { error: true },
    registerStatus: { error: true },
    companyList: [],
    jobList: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_COMPANY":
            return {
                ...state,
                companyList: [...state.companyList, action.payload]
            }
        case "ADD_JOB":
            return {
                ...state,
                jobList: [...state.jobList, action.payload]
            }
        case "DELETE_JOB":
            return {
                ...state,
                jobList: state.jobList.filter((ele, index) => index !== action.payload)
            }
        case "UPDATE_JOB":
            return {
                ...state,
                jobList: state.jobList.map((ele, index) => {
                    if (index == action.id)
                        return action.payload
                    else
                        return ele
                })
            }
        default:
            return state;
    }
}


export default reducer;