// function to remove duplicate values from object
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

// input
arrayObj = {
  array: [6, 6, 6, 6, 1, 2, 1, 2, -8, 0],
  removeDuplicates: function() {
    console.log(removeDuplicateValues(this.array));
  }
};

// output
arrayObj.removeDuplicates();
