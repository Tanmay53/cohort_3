// function which takes two arguments, an array and a target value and return an array where each element is multiplied by the target value
function returnMultiplier(arr, num) {
  return arr.map(function(value) {
    return value * num;
  });
}

// input
var arr = [4, 5, 8, 1, 0, -5, 6];
var num = 4;

// output
console.log(returnMultiplier(arr, num));
