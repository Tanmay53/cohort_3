// initializing array of objects
students = [
  { name: "Albert", marks: 70 },
  { name: "Pogo", marks: 60 },
  { name: "Krishna", marks: 85 }
];

function gradeStudents(object) {
  var grades = object.map(function(data) {
    //   traversing through each object and matching marks
    if (data.marks > 90) {
      return "A";
    } else if (data.marks > 80 && data.marks <= 90) {
      return "B";
    } else if (data.marks > 60 && data.marks <= 80) {
      return "C";
    } else if (data.marks >= 40 && data.marks <= 60) {
      return "D";
    } else if (data.marks < 40) {
      return "F";
    }
  });
  //   Inserting Grades in object
  object.forEach(function(obj, index) {
    obj.grade = grades[index];
  });
  return object;
}

// generating outputs
console.log(gradeStudents(students));
