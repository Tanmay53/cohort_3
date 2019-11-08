// Write a function to find all the positions of a given value inside an array
// Return the output in an array format
// If it doesnt exist return -1

function findIndexOccurance(arr, val) {
  var occurences = [];

  for(i = 0; i < arr.length; i++) {
    if(val === arr[i]) {
      occurences.push(i);
    }
  }

  if(occurences.length == 0) {
    return -1
  } else {
    return occurences;
  }
}

console.log(findIndexOccurance([1,2,'3',3], 3));

// TEST CASES:
// 1. array = [1,2,'3',3] value = 3 output = [2]
// 2. array = [1,2,'3',3] value = '3' output = [3]