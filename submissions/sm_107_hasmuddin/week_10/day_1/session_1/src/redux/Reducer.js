const initialState = {
  count: 0,
  number: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        count: state.count + 1,
        number: state.number
      };
    case "DEC_COUNTER":
      return {
        count: state.count - 1,
        number: state.number
      };
    case "ODD_EVEN_COUNTER":
      let num = 0;
      if (action.num % 2 === 0) {
        num = 2;
      } else {
        num = 1;
      }
      return {
        number: state.number + num,
        count: state.count
      };
    case "MULTIPLIER":
      return {
        number: parseFloat(state.number * action.num),
        count: state.count
      };
    case "DIVIDER":
      return {
        number: parseFloat(state.number / action.num),
        count: state.count
      };
    case "REMAINDER":
      return {
        number: parseFloat(state.number % action.num),
        count: state.count
      };

    default:
      return state;
  }
};

export default counter;
