function gradeStudents(array) {
  res = array.map(function(e) {
    marks = e.marks;
    if (marks > 90) {
      e["grade"] = "A";
    } else if (marks > 80 && marks <= 90) {
      e["grade"] = "B";
    } else if (marks > 60 && marks <= 80) {
      e["grade"] = "C";
    } else if (marks > 40 && marks <= 60) {
      e["grade"] = "D";
    } else {
      e["grade"] = "F";
    }
    return e;
  });

  return res;
}

a = { name: "albert", marks: 95 };
b = { name: "pogo", marks: 35 };
c = { name: "dipanshu", marks: 65 };

students = [a, b, c];

console.log(gradeStudents(students));
