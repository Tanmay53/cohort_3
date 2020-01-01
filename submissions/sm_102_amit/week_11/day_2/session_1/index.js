const mirrorImageFunction = require("./function/mirrorImage");
const arrayDifferenceFunction = require("./function/arrayDifference");
const findCountDuplicatesFunction = require("./function/findCountDuplicates");

// call mirror image
let str = "";
console.log(mirrorImageFunction.mirrorImage(str));

// call array difference
let array_1 = [1, 2, 6, 3, 6, 3, 4, 5, 4];
let array_2 = [1, 2, 3, 4, 4];
console.log(arrayDifferenceFunction.arrayDifference(array_1, array_2));

// call find duplicates
let array = [6, 6, 6, 6, 1, 2, 1, 2, -8, 0, 6];
let value = 6;
console.log(findCountDuplicatesFunction.findCountDuplicates(array, value));
