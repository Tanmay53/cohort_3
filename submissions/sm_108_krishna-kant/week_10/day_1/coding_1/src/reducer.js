const INC_COUNTER = 'INC_COUNTER';
const DEC_COUNTER = 'DEC_COUNTER';
const MUL_COUNTER = 'MUL_COUNTER';
const DIV_COUNTER = 'DIV_COUNTER';
const REM_COUNTER = 'REM_COUNTER';
const INC_EVEN = 'INC_EVEN';
const INC_ODD = 'INC_ODD';

const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        count: state.count + action.amount
      };
    case DEC_COUNTER:
      return {
        count: state.count - action.amount
      };
    case MUL_COUNTER:
      return {
        count: state.count * action.amount
      };
    case DIV_COUNTER:
      return {
        count: state.count / action.amount
      };
    case REM_COUNTER:
      return {
        count: state.count % action.amount
      };
    case INC_EVEN:
      return {
        count: state.count + 2
      };
    case INC_ODD:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default counter;
