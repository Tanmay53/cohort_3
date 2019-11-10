// function to find the position of all occurence of given value in an array
function avgMarks(input) {
  return input.average();
}

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

console.log(avgMarks(student));
