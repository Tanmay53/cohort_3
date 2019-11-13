arr = [1, 2, 4, 7, 8];
target = 2;
//function for multiply in the all array element by target and return in new array;
function multiplier(array, targetValue) {
  multiply = array.map(function(ele) {
    return ele * targetValue;
  });
  console.log(multiply);
}
//revoking function
multiplier(arr, target);
