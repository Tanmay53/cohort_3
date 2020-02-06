export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"

export const addTask = (value) => {
    console.log("action called")
    return{
    type:ADD_TASK,
    payload:value
    }
};
export const deleteTask = (value) => {
    console.log("action called")
    return{
    type:DELETE_TASK,
    payload:value
    }
};
export const completeTask = (value) => {
    console.log("action called")
    return{
    type:COMPLETE_TASK,
    payload:value
    }
};