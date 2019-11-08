var arr = {
  array: [2, 3, 5, 7, 8, 2, 1, 5, 2]
};
var targetIndex = 2;
var count = 0;

// Finding Index
function countInArray(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      count++;
    }
  }
  if (count > 0) {
    return count;
  } else {
    return "No Occurence Found";
  }
}

// Generating Output
console.log(
  `The count of ${targetIndex} in array is ${countInArray(
    arr.array,
    targetIndex
  )}`
);
