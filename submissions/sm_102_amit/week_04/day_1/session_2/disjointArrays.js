// function to check if two given arrays are disjoint or not
function disjointArrays(arr_1, arr_2) {
  // object declaration
  var obj = {};
  // check both array are not empty
  if (arr_1.length != 0 && arr_2.length != 0) {
    for (var i = 0; i < arr_1.length || i < arr_2.length; i++) {
      if (i < arr_1.length) {
        obj[arr_1[i]] = arr_1[i];
      }
      if (i < arr_2.length) {
        obj[arr_2[i]] = arr_2[i];
      }
    }
    if (Object.keys(obj).length == arr_1.length + arr_2.length) {
      return "Yes! [" + arr_1 + "] and [" + arr_2 + "] are 'Disjoint Array'";
    } else {
      return "No! [" + arr_1 + "] and [" + arr_2 + "] are not 'Disjoint Array'";
    }
  } else {
    return "Please check your input array!";
  }
}

// input
var array_1 = [5, 6, 7];
var array_2 = [12, 3, 4, 6];

// output
console.log(disjointArrays(array_1, array_2));
