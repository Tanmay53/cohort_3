//student info
student = {
  name: "Ayaan",
  marks: [90, 93, 24, 21],
  avgMarks: function() {
    marks = this.marks;
    size = Number(marks.length);
    sum = 0;
    for (i = 0; i < marks.length; i++) {
      sum += Number(marks[i]);
    }
    console.log("Average is: " + sum / size);
  }
};

// invoking function

student.avgMarks();
