// Write a function to find the position first occurence of a given value inside an array
// Incase it doesnt exist, return -1

function findIndexPos(arr, val) {
  for(i = 0; i < arr.length; i++) {
    if(arr[i] == val) {
      return i;
    }
  }

  return -1;
}

console.log(findIndexPos([3,1,2,3,3], 3));

// TEST CASES:
// 1. array = [3,1,2,3,3], value = 3
// 2. array = [1,2,3,4], value = 2