// function to find avg marks of student from given input
student = {
  name: "name",
  marks: [50, 30, 100, 80],
  average: function() {
    var sum = 0;
    for (key in this.marks) {
      sum += this.marks[key];
    }
    var length = this.marks.length;
    return sum / length;
  }
};
console.log(student.average());
