export function incrementCount(payload) {
  return {
    type: 'INCREMENT',
    payload
  };
}

export function decrementCount(payload) {
  return {
    type: 'DECREMENT',
    payload
  };
}

export function incrementForOddEven(payload) {
  if (payload % 2 === 0) {
    return {
      type: 'INCREMENT_FOR_ODD_EVEN',
      payload: 2
    };
  } else {
    return {
      type: 'INCREMENT_FOR_ODD_EVEN',
      payload: 1
    };
  }
}

export function multiplyCount(payload) {
  return {
    type: 'MULTIPLY',
    payload
  };
}

export function divideCount(payload) {
  return {
    type: 'DIVIDE',
    payload
  };
}

export function moduloCount(payload) {
  return {
    type: 'MODULO',
    payload
  };
}
