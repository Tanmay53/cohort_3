import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "./Action";

const initialState = {
  addedtask: [],
  completedtask: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state,addedtask:[...state.addedtask,action.payload] };

    // case DELETE_TASK:
    //     state.addedtask=[...state.addedtask].filter(e)=>{e!=action.payload}
    //     return { };

    case COMPLETE_TASK:
        return { ...state,completedtask:[...state.completedtask,action.payload] };

    default:
      return state;
  }
};
