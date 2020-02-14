const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      };
    case 'DECREMENT':
      return {
        count: state.count - action.payload
      };
    case 'INCREMENT_FOR_ODD_EVEN':
      return {
        count: state.count + action.payload
      };
    case 'MULTIPLY':
      return {
        count: state.count * action.payload
      };
    case 'DIVIDE':
      return {
        count: state.count / action.payload
      };
    case 'MODULO':
      return {
        count: state.count % action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
