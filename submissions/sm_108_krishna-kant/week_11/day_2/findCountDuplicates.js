function findCountDuplicates(array, target) {
  let count = {};
  if (target == undefined && typeof array == 'object') {
    return {
      message: 'target not present'
    };
  } else if (array == undefined || target == undefined) {
    return false;
  }

  if (typeof array != 'object') {
    return {
      message: 'argument first must be an array'
    };
  }
  array.forEach(val => {
    if (val === target) {
      if (count[val] == undefined) {
        count[val] = 1;
      } else {
        count[val] = count[val] + 1;
      }
    } else {
      count.data = false;
    }
  });

  return Object.values(count)[0];
}

module.exports = { findCountDuplicates };
