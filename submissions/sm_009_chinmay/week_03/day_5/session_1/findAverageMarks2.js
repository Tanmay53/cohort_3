// Write a function avgMarks which accepts an object as argument.
// Invoke the average function inside the function avgMarks
// the average function should calculate the average of the marks of the student

function avgMarks(object) {
 object.average()
}


avgMarks({
 name: 'Samurai',
 marks: [100, 100, 100, 100, 100 ],
 // marks: [50, 30, 100, 80, "a"],
 average: function () {
  size = this.marks.length
  var sum = 0
  for (var i = 0; i <= this.marks.length - 1; i++) {
   sum += this.marks[i]
  }
  average = sum / size
  console.log(average)
  return average
 },
})
//100