// array
var array = [2, 3, 4, 5, 6, 7, 9, 5, 3, 5, 7, 9, 0];
// target you want to match with
var target = 8;

function filterArray(array, target) {
  //   filter returns new array based on condition
  var newarray = array.filter(function(element) {
    return Number(element) < Number(target);
  });
  return newarray;
}

// generating output
console.log(filterArray(array, target));
