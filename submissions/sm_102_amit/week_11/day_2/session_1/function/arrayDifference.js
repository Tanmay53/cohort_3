/**
 * function to find difference of array
 * @param {array} arr_1
 * @param {array} arr_2
 */
const arrayDifference = (arr_1, arr_2) => {
  var difference_arr = [];
  if (
    arr_1.length > arr_2.length &&
    (arr_1.length != 0) & (arr_2.length != 0)
  ) {
    arr_1.forEach(element => {
      if (
        arr_1.includes(element) == true &&
        arr_2.includes(element) == false &&
        difference_arr.includes(element) == false
      ) {
        difference_arr.push(element);
      }
    });
    return difference_arr;
  } else {
    return "Wrong Input!";
  }
};

module.exports = { arrayDifference };
