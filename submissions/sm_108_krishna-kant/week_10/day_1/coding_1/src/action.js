const INC_COUNTER = 'INC_COUNTER';
const DEC_COUNTER = 'DEC_COUNTER';
const MUL_COUNTER = 'MUL_COUNTER';
const DIV_COUNTER = 'DIV_COUNTER';
const REM_COUNTER = 'REM_COUNTER';
export const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount
  };
};

export const decrementCounter = amount => {
  return {
    type: DEC_COUNTER,
    amount
  };
};

export const multiplyCounter = amount => {
  return {
    type: MUL_COUNTER,
    amount
  };
};

export const divideCounter = amount => {
  return {
    type: DIV_COUNTER,
    amount
  };
};

export const remCounter = amount => {
  return {
    type: REM_COUNTER,
    amount
  };
};
