arr = [1, 2, 4, 7, 8];
target = 4;
//function for find greater element from target value and do sum and return new array;
function reduceSum(array, targetValue) {
  filterGreater = array.filter(function(ele) {
    return ele > targetValue;
  });
  sum = filterGreater.reduce(function(element, index) {
    return element + index;
  });
  console.log(sum);
}
//revoking function
reduceSum(arr, target);
