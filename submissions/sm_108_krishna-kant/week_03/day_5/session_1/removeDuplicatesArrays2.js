// Object of Array
var arr = {
  arrayOne: [1, 3, 5, 7, 3, 5, 9, 0, 11, 32, 8]
};
var filteredArray = {
  array: []
};

// function
function removeDuplicates(args) {
  var j = 0;
  for (array in args) {
    for (var i = 0; i < args[array].length; i++) {
      //   checking if element present in filtered array
      if (filteredArray.array.indexOf(args[array][i]) == -1) {
        push(filteredArray.array, args[array][i], j);
        j++;
      }
    }
  }
  console.log(filteredArray.array);
}

// push function
function push(array, element, index) {
  return (array[index] = element);
}

// function calling
removeDuplicates(arr);
