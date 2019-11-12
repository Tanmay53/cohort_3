//student info
student = {
  name: "Ayaan",
  marks: [85, 80, 90, 80]
};

// creating a fucntion to calculate average of student marks;

function average(marks) {
  size = Number(marks.length);
  sum = 0;
  for (i = 0; i < marks.length; i++) {
    sum += Number(marks[i]);
  }
  console.log("Average is :", sum / size);
}

//invoking average function;

average(student.marks);
