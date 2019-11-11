var arr = [2, 3, 5, 7, 8, 2, 1, 5];
var findIndex = 11;
var index = [];

// Finding Index
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      index.push(i);
    }
  }
  if (index.length > 0) {
    return index;
  } else {
    return -1;
  }
}

console.log(indexOf(arr, findIndex));
