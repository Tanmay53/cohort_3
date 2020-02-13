let nextTodo = 0;

export function addItem(payload) {
  return {
    type: 'ADD_ITEM',
    id: `${nextTodo++}`,
    payload
  };
}

export function removeItem(payload) {
  return {
    type: 'REMOVE_ITEM',
    payload
  };
}

export function markItem(id) {
  return {
    type: 'MARK_ITEM',
    id
  };
}

export function unmarkItem(id) {
  return {
    type: 'UNMARK_ITEM',
    id
  };
}

export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    id
  };
}
