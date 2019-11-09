var arr = [2, 3, 5, 7, 4, 8, 4, 7, 9];
var filteredArray = [];

// Index Of
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      return i;
    }
  }
  return -1;
}

// function
function removeDuplicates(args) {
  var j = 0;
  for (var i = 0; i < args.length; i++) {
    //   checking if element present in filtered array
    if (indexOf(filteredArray, args[i]) == -1) {
      push(filteredArray, args[i], j);
      j++;
    }
  }
  console.log(filteredArray);
}

// push function
function push(array, element, index) {
  return (array[index] = element);
}

// function calling
removeDuplicates(arr);