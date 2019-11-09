// Write a function to remove duplicates from an array
// Use arrays

function removeDuplicatesArrays(arr) {
  var new_arr = [];

  for(i = 0; i <  arr.length; i++) {
    for(j = i + 1; j < arr.length; j++) {
      if(arr[i] == arr[j]) {
        arr[j] = "#"; // replace with "#" for all the duplicate elements..
      }
    }
  }

  for(i = 0; i < arr.length; i++) {
    if(arr[i] != "#") {
      new_arr.push(arr[i]);
    }
  }

  return new_arr;
}

console.log(removeDuplicatesArrays([]))

// TEST CASES:
// 1. [1,4,2,3,4,4,1,1,90,0]
// 2. [0,1,4,2,3,4,4,1,1,90,0]
// 3. [1,2,3,4]