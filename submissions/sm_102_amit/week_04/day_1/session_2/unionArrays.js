// function that accepts the two arrays and returns union using objects data type to solve the problem
function unionArrays(arr_1, arr_2) {
  // object declaration
  var obj = {};

  for (var i = 0; i < arr_1.length || i < arr_2.length; i++) {
    if (i < arr_1.length) {
      obj[arr_1[i]] = arr_1[i];
    }
    if (i < arr_2.length) {
      obj[arr_2[i]] = arr_2[i];
    }
  }
  return Object.keys(obj).map(function(elem) {
    return parseInt(elem);
  });
}

// input
var arr_1 = [1, 2, 5, 6, 2];
var arr_2 = [1, 2, 3, 4, 3, 1];

// output
console.log(unionArrays(arr_1, arr_2));
