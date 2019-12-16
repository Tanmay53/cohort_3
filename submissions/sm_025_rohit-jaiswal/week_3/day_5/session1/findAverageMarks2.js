student = {
    name: 'name',
    marks: [50, 30, 100, 80],
    average: function() {
        var sum = 0
        var avg = 0
        for (var i = 0; i <= this.marks.length - 1; i++) {
            sum += this.marks[i]
            avg = sum / (i + 1)

        }
        console.log(avg)

    }
}

function avgMarks(objct) {
    objct.average()
}
avgMarks(student)