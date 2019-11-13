// funciton which accepts an array of integers returns output based on operation
function gradeStudents(input) {
  // array.map method
  var arr = input.map(function(obj) {
    for (key in obj) {
      if (key == "marks") {
        if (obj.marks >= 90) {
          obj.grade = "A";
        } else if (obj.marks >= 80 && obj.marks < 90) {
          obj.grade = "B";
        } else if (obj.marks >= 60 && obj.marks < 80) {
          obj.grade = "C";
        } else if (obj.marks >= 40 && obj.marks < 60) {
          obj.grade = "D";
        } else {
          obj.grade = "F";
        }
      }
    }
    return obj;
  });
  return arr;
}

// input
students = [
  {
    name: "Albert",
    marks: 70
  },
  {
    name: "Pogo",
    marks: 60
  }
];

// output
console.log(gradeStudents(students));
