//function definition
function findAverageMarks(object) {
    var cnt = 0
    for (i = 0; i < student.marks.length; i++) {
        cnt = cnt + Number(student.marks[i])
    }
    var avg = cnt / Number(student.marks.length)
    console.log(avg)
}



//Object

var student = {
    name: 'Manish Sharma',
    marks: [50, 30, 100, 80]
}

//function execution

findAverageMarks(student)