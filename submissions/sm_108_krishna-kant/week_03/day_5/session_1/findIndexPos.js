var arr = [2, 3, 5, 7, 8, 2, 1, 5];
var findIndex = 8;

// Finding Index
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(arr, findIndex));
