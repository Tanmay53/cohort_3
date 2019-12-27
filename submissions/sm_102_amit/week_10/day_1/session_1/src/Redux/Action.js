export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";
export const MUL_COUNTER = "MUL_COUNTER";
export const DIV_COUNTER = "DIV_COUNTER";
export const MOD_COUNTER = "MOD_COUNTER";
export const CHK_COUNTER = "CHK_COUNTER";

export const incrementCounter = value => {
  return {
    type: INC_COUNTER,
    value: value
  };
};

export const decrementCounter = value => {
  return {
    type: DEC_COUNTER,
    value: value
  };
};

export const multiplyCounter = value => {
  return {
    type: MUL_COUNTER,
    value: value
  };
};

export const divideCounter = value => {
  return {
    type: DIV_COUNTER,
    value: value
  };
};

export const moduloCounter = value => {
  return {
    type: MOD_COUNTER,
    value: value
  };
};

export const checkCounter = () => {
  return {
    type: CHK_COUNTER
  };
};
