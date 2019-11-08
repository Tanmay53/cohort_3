// function to count the occurence of given value in an array
function findCountDuplicates(arrayObj) {
  if (arrayObj.array.length > 0) {
    count = 0;
    for (var i = 0; i < arrayObj.array.length; i++) {
      if (arrayObj.array[i] == arrayObj.value) {
        count++;
      } else {
        continue;
      }
    }
    return count;
  } else {
    return "It's an empty array!";
  }
}

// input cases
arrayObj = {
  array: [6, 6, 6, 6, 1, 2, 1, 2, -8, 0],
  value: 6
};

// output
console.log(findCountDuplicates(arrayObj));
