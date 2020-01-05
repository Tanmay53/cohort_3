import {
  INC_COUNTER,
  DEC_COUNTER,
  MUL_COUNTER,
  DIV_COUNTER,
  MOD_COUNTER,
  CHK_COUNTER
} from "./Action";

const reducer = (state, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        count: Number(state.count) + Number(action.value)
      };
    case DEC_COUNTER:
      return {
        count: Number(state.count) - Number(action.value)
      };
    case MUL_COUNTER:
      return {
        count: Number(state.count) * Number(action.value)
      };
    case DIV_COUNTER:
      return {
        count: Math.floor(Number(state.count) / Number(action.value))
      };
    case MOD_COUNTER:
      return {
        count: Number(state.count) % Number(action.value)
      };
    case CHK_COUNTER:
      var stateVal = Number(state.count);
      return {
        count: stateVal % 2 === 0 ? stateVal + 2 : stateVal + 1
      };
    default:
      return state;
  }
};

export default reducer;
