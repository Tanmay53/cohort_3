// Initializing an array
var array = [2, 5, 6, 7, 8, 9, 9, 1];

function checkElementBefore(array) {
  // Using map traversing on each element of array
  var returnValue = array.map(function(element, index, arr) {
    if (arr[index - 1] > element) return -1;
    else return 1;
  });
  return returnValue;
  //   returning the array of result returned by map function
}

console.log(checkElementBefore(array));
