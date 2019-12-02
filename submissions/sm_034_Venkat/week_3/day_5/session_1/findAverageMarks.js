function avgMarksAre (student) {
var student = student || {
    name: 'GangiR',
    marks: [50, 30, 100, 80],
    place: 'Kadapa'
}
var sum= 0;
for (i= 0; i< student.marks.length; i++) {
    sum += student.marks[i];
}
var avg= sum/student.marks.length
console.log ('Marks Average Is '+ avg )
}
avgMarksAre ()