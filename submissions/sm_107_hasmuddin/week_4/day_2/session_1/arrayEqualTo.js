arr = [1, 2, 4, 7, 8];
target = 4;
//function for removing target element from array and square to each element.
function arraySquare(array, targetValue) {
  removeTarget = array.filter(function(ele) {
    return ele != targetValue;
  });
  square = removeTarget.map(function(ele) {
    return ele ** 2;
  });
  console.log(square);
}
//revoking function
arraySquare(arr, target);
