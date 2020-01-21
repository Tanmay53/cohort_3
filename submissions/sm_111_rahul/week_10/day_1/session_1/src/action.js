/** @format */

const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const MUL_COUNTER = "MUL_COUNTER";
const DIV_COUNTER = "DIV_COUNTER";
const REM_COUNTER = "REM_COUNTER";

const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount: amount
  };
};

const decrementCounter = amount => {
  return {
    type: DEC_COUNTER,
    amount: amount
  };
};

const multiplyCounter = amount => {
  return {
    type: MUL_COUNTER,
    amount: amount
  };
};

const divideCounter = amount => {
  return {
    type: DIV_COUNTER,
    amount: amount
  };
};
const remainderCounter = amount => {
  return {
    type: REM_COUNTER,
    amount: amount
  };
};

export {
  incrementCounter,
  decrementCounter,
  multiplyCounter,
  divideCounter,
  remainderCounter
};
