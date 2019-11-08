// Object student detail
var student = {
  name: "Krishna Kant Sharma",
  marks: [50, 30, 100, 80]
};

// finding average
function findAverage(student) {
  var sum = 0;
  for (i = 0; i < student.marks.length; i++) {
    sum += student.marks[i];
  }
  var average = sum / student.marks.length;
  return average;
}

// Genrating Output
console.log(
  `The average of marks student ${student.name} is ${findAverage(student)}`
);
