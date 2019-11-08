var arr = [2, 3, 5, 7, 4, 8, 4, 7, 9];
var filteredArray = [];

// function
function removeDuplicates(args) {
  for (var i = 0; i < args.length; i++) {
    //   checking if element present in filtered array
    if (filteredArray.indexOf(args[i]) == -1) {
      filteredArray.push(args[i]);
    }
  }
  console.log(filteredArray);
}

// function calling
removeDuplicates(arr);
