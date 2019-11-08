// Object of Array
var arr = {
  arrayOne: [1, 3, 5, 7, 3, 5, 9, 0, 11, 32, 8]
};
var filteredArray = {
  array: []
};

// function
function removeDuplicates(args) {
  for (array in args) {
    for (var i = 0; i < args[array].length; i++) {
      //   checking if element present in filtered array
      if (filteredArray.array.indexOf(args[array][i]) == -1) {
        filteredArray.array.push(args[array][i]);
      }
    }
  }
  console.log(filteredArray.array);
}

// function calling
removeDuplicates(arr);
