// function to check array1 is superset of array 2
function checkSupersetArrays(arr_1, arr_2) {
  // object declaration
  var obj = {};
  // check both array are not empty
  if (arr_1.length != 0 && arr_2.length != 0) {
    // array 1 length must be greater than array 2 length to be a superset
    if (arr_1.length >= arr_2.length) {
      for (var i = 0; i < arr_1.length || i < arr_2.length; i++) {
        if (i < arr_1.length) {
          obj[arr_1[i]] = arr_1[i];
        }
        if (i < arr_2.length) {
          obj[arr_2[i]] = arr_2[i];
        }
      }
      if (Object.keys(obj).length == arr_1.length) {
        return "Yes! [" + arr_1 + "] is superset of [" + arr_2 + "]";
      } else {
        return "No! [" + arr_1 + "] is not superset of [" + arr_2 + "]";
      }
    } else {
      return "[" + arr_1 + "] can't be superset of [" + arr_2 + "]";
    }
  } else {
    return "Please check your input array!";
  }
}

// input
var array_1 = [5, 6, 2, 1];
var array_2 = [1, 6, 8];

// output
console.log(checkSupersetArrays(array_1, array_2));
