// Create an array with the intersection of two given arrays
// Create a function that accepts the two arrays

function intersectionArrays(arr1, arr2) {
  var inter_arr = [];
  var new_arr = arr1.concat(arr2);

  for(var i = 0; i < new_arr.length; i++) {
    if(inter_arr.indexOf(new_arr[i]) == -1) {
      inter_arr.push(new_arr[i])
    }
  }

  return inter_arr;
}

console.log(intersectionArrays([1,2,3,7,8], [4,5,5,5,2]));