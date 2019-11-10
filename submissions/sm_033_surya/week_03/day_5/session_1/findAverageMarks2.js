var student = {
    name:'name',
    marks: [50,30,100,80],
    average: function(){
        var sum = 0
        var avg = 0
        for ( i = 0 ; i < this.marks.length ; i++)
        {
            var sum  = sum + this.marks[i];
        }
        var avg = sum / this.marks.length
        console.log("The average of marks :",avg)
        }
}

function avgMarks(student) {
    student.average() // calling average function
}

avgMarks(student) // calling function