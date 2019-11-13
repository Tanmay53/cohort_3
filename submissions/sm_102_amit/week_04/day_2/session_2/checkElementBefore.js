// function which takes an array of values and find the total cost of all items using the reduce function
function checkElementBefore(arr) {
  return arr.reduce(function(acc, value) {
    return acc + value;
  });
}

// input
var arr = [40, 50, 85, 12, 20, 5, 61];

// output
console.log(checkElementBefore(arr));
