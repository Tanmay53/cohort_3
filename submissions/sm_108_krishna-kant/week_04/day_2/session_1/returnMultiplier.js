// IArray
var array = [100, 200, 250, 600, 500];
// target to multiply
var target = 10;

function multiply(array, target) {
  //multiplying
  return array.map(function(element) {
    return element * target;
  });
}

// generating output
console.log(multiply(array, target));
