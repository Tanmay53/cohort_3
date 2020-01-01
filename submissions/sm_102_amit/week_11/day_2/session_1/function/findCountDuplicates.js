/**
 * function to count the occurence of given value in an array
 * @param {array} array
 * @param {value} value
 */
const findCountDuplicates = (array, value) => {
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
    return "Wrong Input!";
  }
};

module.exports = { findCountDuplicates };
