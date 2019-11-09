// function to count the occurence of given value in an array
function findCountDuplicates(array, value) {
  // check if array is empty or not
  if (array.length > 0) {
    count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
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
  array: [6, 6, 6, 6, 1, 2, 1, 2, -8, 0, 6],
  value: 6,
  countDuplicates: function() {
    console.log(findCountDuplicates(this.array, this.value));
  }
};

// output
arrayObj.countDuplicates();
