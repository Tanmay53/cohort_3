student = {
    name: '<name>',
    marks: [50, 30, 100, 80]
}

function findAverageMarks(object) {
    var sum = 0
    var avg = 0
    for (var i = 0; i <= object.marks.length - 1; i++) {
        sum += object.marks[i]
        avg = sum / (i + 1)

    }
    console.log(avg)

}
findAverageMarks(student)