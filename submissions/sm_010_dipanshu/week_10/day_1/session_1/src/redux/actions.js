export const increment = num => ({
  type: "increment",
  payload: num
});

export const decrement = num => ({
  type: "decrement",
  payload: num
});

export const incrementEven = () => ({
  type: "incrementEven"
});

export const incrementOdd = () => ({
  type: "incrementOdd"
});

export const multiply = num => ({
  type: "multiply",
  payload: num
});

export const divide = num => ({
  type: "divide",
  payload: num
});

export const modulus = num => ({
  type: "modulus",
  payload: num
});
