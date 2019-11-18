// array
var array = [2, 2, 3, 4, 5, 3, 2];
// target you want to match with
var target = 2;

function equalsTo(array, target) {
  //   filter returns new array based on condition
  var newarray = array
    .filter(function(element) {
      return element != target;
    }) // Squaring value using method chain
    .map(function(element) {
      return element * element;
    });
  return newarray;
}

// generating output
console.log(equalsTo(array, target));
