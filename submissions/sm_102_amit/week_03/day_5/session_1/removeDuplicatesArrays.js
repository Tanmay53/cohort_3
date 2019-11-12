// function to remove duplicate values from array
function removeDuplicateValues(array) {
  // check if array is empty or not
  if (array.length > 0) {
    newArray = [];
    index = 0;
    for (var i = 0; i < array.length; i++) {
      if (position(newArray, array[i]) >= 0) {
        continue;
      } else {
        insert(newArray, array[i], index);
        index++;
        // newArray.push(array[i]);
      }
    }
    return "[" + newArray + "] is new array without duplicates.";
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

// function to add an element inside an array
function insert(array, element, index) {
  return (array[index] = element);
}
// all cases
// var array = [5, 6, 7, 6, 8, 1, 9, 5];
// var array = [];
// var array = [6, 6, 6, 6];
var array = [6, 6, 6, 6, 1, 2, 1, 2, -8, 0];

// output
console.log(removeDuplicateValues(array));
