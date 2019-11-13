// function to find the position of all occurence of given value in an array
function findIndexOccurence(array, value) {
  // check if array is empty or not
  if (array.length > 0) {
    posArray = [];
    index = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] != value) {
        continue;
      } else {
        insert(posArray, i, index);
        index++;
        // posArray.push(i);
      }
    }
    if (posArray.length > 0) {
      return "[" + posArray + "] positions of " + value + " in [" + array + "]";
    } else {
      return -1;
    }
  } else {
    return "It's an empty array!";
  }
}

// function to add an element inside an array
function insert(array, element, index) {
  return (array[index] = element);
}

// input cases
// var array = [5, 6, 7, 6, 8, 1, 9, 5];
// var array = [];
// var array = [6, 6, 6, 6];
var array = [6, 6, 8, 2, 1, 2, 8, 0];
var value = 8;

// output
console.log(findIndexOccurence(array, value));
