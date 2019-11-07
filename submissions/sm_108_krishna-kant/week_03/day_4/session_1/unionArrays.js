// Union is combination of two sets for each element

var arrayOne = [2, 4, 6, 8, 9, 9];
var arrayTwo = [4, 2, 5, 6, 8, 2];
var union = [];

// finding union
function arrayUnion(args1, args2) {
  var temp = args1.concat(args2);
  temp.forEach(data => {
    if (!union.includes(data)) {
      union.push(data);
    }
  });
  console.log(union);
}

arrayUnion(arrayOne, arrayTwo);
