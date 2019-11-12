// function to find difference of array
function arrayDifference(arr_1, arr_2) {
  // object declaration
  var obj = {};
  // check both array are not empty
  if (arr_1.length != 0 && arr_2.length != 0) {
    for (var i = 0; i < arr_1.length; i++) {
      if (arr_2.includes(arr_1[i]) == false) {
        obj[arr_1[i]] = arr_1[i];
      }
    }
  } else {
    return "Please check your input array!";
  }
  return Object.keys(obj).map(function(elem) {
    return parseInt(elem);
  });
}
var array_1 = [1, 2, 6, 3, 6, 3, 4, 5, 4];
var array_2 = [1, 2, 3, 4, 4];

console.log(arrayDifference(array_1, array_2));
