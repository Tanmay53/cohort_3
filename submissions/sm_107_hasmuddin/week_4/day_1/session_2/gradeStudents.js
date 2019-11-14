students = [
  { name: "Ayaan", marks: 92 },
  { name: "Suyas", marks: 85 },
  { name: "Amit", marks: 45 },
  { name: "Deepanshu", marks: 19 }
];
//adding grade;
studentGrade = students.map(function(element) {
  if (element.marks > 90) {
    grade = "A";
  } else if (element.marks < 90 && element.marks > 80) {
    grade = "B";
  } else if (element.marks < 80 && element.marks > 60) {
    grade = "C";
  } else if (element.marks < 60 && element.marks > 40) {
    grade = "D";
  } else {
    grade = "F";
  }
  element["grade"] = grade;
  return element;
});

console.log(studentGrade);
