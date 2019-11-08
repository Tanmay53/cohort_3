// student Object :
// average : findAverage function
student = {
  name: "name",
  marks: [50, 30, 100, 80],
  average: function() {
    var sum = 0;
    for (i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    var average = sum / this.marks.length;
    return average;
  }
};

function avgMarks(student) {
  return student.average();
}

// Genrating Output
console.log(
  `The average of marks student ${student.name} is ${avgMarks(student)}`
);
