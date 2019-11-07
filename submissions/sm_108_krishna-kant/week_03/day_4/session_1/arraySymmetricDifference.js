var arrayOne = [2, 5, 9, 6, 7, 55, 13, 66, 5];
var arrayTwo = [12, 55, 4, 6, 7, 13, 66, 12];
var difference = [];
// Finding Difference

function arrayDifference(args1, args2) {
  for (i = 0; i < args2.length; i++) {
    if (!args1.includes(args2[i])) {
      if (!difference.includes(args2[i])) {
        difference.push(args2[i]);
      }
    }
  }
  for (i = 0; i < args1.length; i++) {
    if (!args2.includes(args1[i])) {
      if (!difference.includes(args1[i])) {
        difference.push(args1[i]);
      }
    }
  }

  return difference;
}

console.log(arrayDifference(arrayOne, arrayTwo));
