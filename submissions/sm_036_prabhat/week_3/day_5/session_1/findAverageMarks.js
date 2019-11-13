function findAverageMarks(marks){
    var sum = 0;
    var avg = 0;

    for(var i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    avg = sum/marks.length;
    return avg;
}
var student = {
    name:'prabhat',
    marks: [50,30,100,80]
}
console.log(findAverageMarks(student.marks))