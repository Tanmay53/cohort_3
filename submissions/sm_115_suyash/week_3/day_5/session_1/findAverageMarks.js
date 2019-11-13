var Krishna = {
  name: "suyash",
  marks: [23, 45, 34, 12, 54, 67, 32, 24]
};

function avg(student) {
  var sum = 0;
  var subject = 0;
  for (i = 0; i < student.marks.length; i++) {
    sum = sum + student.marks[i];
    subject++;
  }
  return sum / subject;
}

console.log(avg(Krishna))