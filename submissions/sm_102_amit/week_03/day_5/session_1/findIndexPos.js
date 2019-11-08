// function to find the first occurence of given value in an array
function findIndexPos(array, value) {
  // check if array is empty or not
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return (
          "Position of " +
          value +
          " in [" +
          array +
          "] is " +
          position(array, array[i])
        );
      } else {
        return -1;
      }
    }
  } else {
    return "It's an empty array!";
  }
}

// function to get position of element inside an array
function position(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
}

// input cases
var array = [5, 6, 7, 6, 8, 1, 9, 5];
// var array = [];
// var array = [6, 6, 6, 6];
// var array = [6, 6, 8.5, 2, 1, 2, -8, 0];
var value = 2;

// output
console.log(findIndexPos(array, value));
