const countReducer = (count = 0, action) => {
  switch (action.type) {
    case "increment":
      return count + action.payload;

    case "decrement":
      return count - action.payload;

    case "incrementOdd":
      return count + 1;

    case "incrementEven":
      return count + 2;

    case "multiply":
      return count * action.payload;

    case "divide":
      return (count / action.payload).toFixed(2);

    case "modulus":
      return (count % action.payload).toFixed(2);

    default:
      return count;
  }
};

export default countReducer;
