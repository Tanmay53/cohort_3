function difference(array1, array2) {
  obj1 = {};
  obj2 = {};
  obj3 = {};

  array1.forEach(function(e) {
    obj1[e] = e;
  });
  array2.forEach(function(e) {
    obj2[e] = e;
  });

  uniq1 = Object.keys(obj1);
  uniq2 = Object.keys(obj2);
  //   console.log(uniq1, uniq2);

  uniq1.forEach(function(e) {
    obj3[e] = 0;
  });
  //   console.log(obj3);

  for (var i = 0; i < uniq2.length; i++) {
    ++obj3[uniq2[i]];
  }
  //   console.log(obj3);

  differenceArray = [];
  for (key in obj3) {
    if (obj3[key] == 0) {
      differenceArray.push(key);
    }
  }

  return differenceArray;
}

console.log(difference([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(difference([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(difference([1, 2, 3, 4, 1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8]));
console.log(
  difference(
    [1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 5, 2, 1, 2, 3, 5],
    [5, 6, 7, 8, 1, 2, 2, 9, 0, 1, 1, 2, 1]
  )
);
