var arrayOne = [2, 5, 9, 6, 7, 55, 13, 66];
var arrayTwo = [12, 55, 4, 6, 7, 13, 66];
var instersection = [];
// Finding Intersection

function arrayIntersection(args1, args2) {
  for (var i = 0; i < args1.length; i++) {
    for (var j = 0; j < args2.length; j++) {
      if (args1[i] === args2[j]) {
        instersection.push(args2[j]);
      }
    }
  }
  console.log(instersection);
}

arrayIntersection(arrayOne, arrayTwo);
