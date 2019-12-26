const incrementCounter = () => {
  return {
    type: "INC_COUNTER"
  };
};
const decrementCounter = () => {
  return {
    type: "DEC_COUNTER"
  };
};
const oddEvenCounter = num => {
  return {
    type: "ODD_EVEN_COUNTER",
    num
  };
};
const multiplier = num => {
  return {
    type: "MULTIPLIER",
    num
  };
};

const divider = num => {
  return {
    type: "DIVIDER",
    num
  };
};
const remainder = num => {
  return {
    type: "REMAINDER",
    num
  };
};
export {
  incrementCounter,
  decrementCounter,
  oddEvenCounter,
  multiplier,
  divider,
  remainder
};
