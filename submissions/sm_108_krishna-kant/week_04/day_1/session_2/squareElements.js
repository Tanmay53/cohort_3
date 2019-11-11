// Initializing Array
var array = [2, 3, 2, 4, 5, 6, 7];

function squareElements(array) {
  // map function returns array of sqaured elements
  var sqaures = array.map(function(element) {
    return element ** 2;
  });
  console.log(sqaures);
}

// generating output
squareElements(array);
