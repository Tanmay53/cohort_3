student = {
    name:'prabhat',
    marks: [50,30,100,80],
    average: function(){
        // write code here
        var sum = 0;
        var avg = 0;
        for(var i = 0; i < student.marks.length; i++){
            sum += student.marks[i];
        }
        avg = sum / student.marks.length;
        return avg;
    }
}

function averageMarks (student){
    student.average = student.average();
    return student;
}
console.log(averageMarks(student))