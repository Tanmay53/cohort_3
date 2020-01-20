const ADD = "ADD";
const SUB = "SUB";

const Increment = () => {
  // console.log("Increment");
  return {
    type: ADD
  };
};

const Decrement = () => {
  // console.log("Decrement");
  return {
    type: SUB
  };
};

const Addition = val => {
  return {
    type: "ADDITION",
    val: val
  };
};

const Subtartion = val => {
  return {
    type: "SUBTRATION",
    val: val
  };
};

const Multi = val => {
  return {
    type: "MULTIPLY",
    val: val
  };
};

const Divide = val => {
  return {
    type: "DIVIDE",
    val: val
  };
};

const Reminder = val => {
  return {
    type: "REMINDER",
    val: val
  };
};

const EvenOdd = val => {
  return {
    type: "EVEN/ODD",
    val: val
  };
};

export {
  ADD,
  SUB,
  Increment,
  Decrement,
  Addition,
  Subtartion,
  Multi,
  Divide,
  Reminder,
  EvenOdd
};
