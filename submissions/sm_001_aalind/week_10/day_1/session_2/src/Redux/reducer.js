const initialState = {
  all_items: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      action.payload['id'] = action.id;

      return Object.assign({}, state, {
        all_items: state.all_items.concat(action.payload)
      });
    case 'MARK_ITEM':
      return Object.assign({}, state, {
        all_items: [...state.all_items].map(item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        )
      });
    case 'UNMARK_ITEM':
      return Object.assign({}, state, {
        all_items: [...state.all_items].map(item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        )
      });
    case 'DELETE_ITEM':
      return Object.assign({}, state, {
        all_items: state.all_items.filter(item => item.id !== action.id)
      });
    default:
      return state;
  }
}

export default rootReducer;
