export const addCompany = (payload) => {
    return {
        type: "ADD_COMPANY",
        payload
    }
}

export const addJob = (item) => {
    return {
        type: "ADD_JOB",
        payload: item
    }
}

export const deleteJob = (payload) => {
    return {
        type: "DELETE_JOB",
        payload
    }
}

export const updateJob = (payload, id) => {

    return {
        type: "UPDATE_JOB",
        payload,
        id
    }
}