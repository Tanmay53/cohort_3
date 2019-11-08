var arr = {
  array: [2, 3, 5, 7, 8, 2, 1, 5, 2]
};
var targetIndex = 2;
var count = {
  flag: 0
};

// Finding Index
function countInArray(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      count.flag++;
    }
  }
  if (count.flag > 0) {
    return count.flag;
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
