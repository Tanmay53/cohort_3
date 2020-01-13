const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

const incrementCount = amount => {
  return {
    type: INCREMENT_COUNT,
    amount
  };
};

const decrementCount = amount => {
  return {
    type: DECREMENT_COUNT,
    amount
  };
};

export { incrementCount, decrementCount };
