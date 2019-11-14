// Write a function which accepts an object as argument and calculates the average of the marks of a student
// marks is an array inside the objects

function findAverageMarks(obj) {
  var sum = 0;

  for(i = 0; i < obj["marks"].length; i++) {
    sum += obj["marks"][i];
  }

  return sum/obj["marks"].length;
}

console.log(findAverageMarks(student = {
    name:'<name>',
    marks: [50,30,100,80]
}))

// TEST CASES:
// 1. student = {
//     name:'<name>',
//     marks: [50,30,100,80]
// }