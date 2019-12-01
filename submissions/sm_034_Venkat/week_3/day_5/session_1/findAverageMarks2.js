function avgMarks (student) {
var student = {
    name:'name',
    marks: [50,30,100,80],
    average: function(){
        var sum= 0;
        for (i= 0; i< student.marks.length; i++) {
            sum += student.marks[i]
        }
        var avg= sum/ student.marks.length
        return avg
    }
}
console.log(student.average())
}
avgMarks()