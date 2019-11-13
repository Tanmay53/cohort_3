// array
var array = [2, 2, 3, 4, 5, 3, 2];
// target you want to match with
var target = 2;

function reduceSum(array, target) {
  //   filter returns new array based on condition
  return array
    .filter(function(element) {
      return element > target;
    }) //adding sum in accumlator
    .reduce(function(acc, curr) {
      return (acc += curr);
    }, 0);
}

// generating output
console.log(reduceSum(array, target));
