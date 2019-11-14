//filter to find greater element to target num

arr = [1, 2, 3, 4, 5, 7, 6, 7, 8, 9];
target = 5;

function filterArray(array, targetValue) {
  newArr = array.filter(function(ele) {
    return ele >=  targetValue;
  });
  console.log(newArr);
}
//revoking function
filterArray(arr, target);
