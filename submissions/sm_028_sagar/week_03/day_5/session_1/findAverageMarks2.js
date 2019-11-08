var student = {
    name: 'sagar',
    marks: [50, 30, 100, 80],
    average: function(marks) {
        // write code here
        var sum = 0;
        for (var i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i];
        }
        return sum / (this.marks.length);
    }
}


function avgMarks(student) {
    console.log(student.average());
}

//Invoking function:
avgMarks(student);