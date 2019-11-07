// Create an array with the union of two given arrays
// Create a function that accepts the two arrays

function unionArrays(arr1, arr2) {
  var new_arr = arr1.concat(arr2);
  var arr_new = [new_arr[0]];
  var flag = 0;

  for(var i = 1; i < new_arr.length; i++) {
    for(var j = 0; j < arr_new.length; j++) {
      if(new_arr[i] == arr_new[j]) {
        flag = 1;
        break;
      }
    }
    if(flag == 0) {
      arr_new.push(new_arr[i]);
    }
    flag = 0;
  }

  return arr_new
}

console.log(unionArrays([1,2,3,3], [5,6,7,3,2,28,8]));