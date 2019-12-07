function averageMarks(student) {
    var sum = 0
    var avg = 0
    marks = student["marks"]

    if (marks.length == 0)   //if marks are not given(empty) ,then return 0
        return 0

    for (i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    avg = sum / marks.length
    return avg
}
var student = {
    name: 'chathan',
    marks: [50, 30, 100, 80]
}
console.log(averageMarks(student))