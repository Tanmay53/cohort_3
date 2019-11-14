// function to check array1 is subset of array 2
function checkSubsetArrays(arr_1, arr_2) {
  // object declaration
  var obj = {};
  // check both array are not empty
  if (arr_1.length != 0 && arr_2.length != 0) {
    if (arr_2.length >= arr_1.length) {
      for (var i = 0; i < arr_1.length || i < arr_2.length; i++) {
        if (i < arr_1.length) {
          obj[arr_1[i]] = arr_1[i];
        }
        if (i < arr_2.length) {
          obj[arr_2[i]] = arr_2[i];
        }
      }
      if (Object.keys(obj).length == arr_2.length) {
        return "Yes! [" + arr_1 + "] is subset of [" + arr_2 + "]";
      } else {
        return "No! [" + arr_1 + "] is not subset of [" + arr_2 + "]";
      }
    } else {
      return "[" + arr_1 + "] can't be subset of [" + arr_2 + "]";
    }
  } else {
    return "Please check your input!";
  }
}

var array_1 = [1, 4, 6, 8];
var array_2 = [1, 2, 6, 3, 4];

console.log(checkSubsetArrays(array_1, array_2));
