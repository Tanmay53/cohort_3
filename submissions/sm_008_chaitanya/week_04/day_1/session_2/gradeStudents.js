function gradeStudents(data) {
    data.map(function (val) {
        if (val.marks >= 90) {
            val.grade = 'A'
        }
        else if (val.marks < 90 && val.marks >= 80) {
            val.grade = 'B'
        }
        else if (val.marks < 80 && val.marks >= 60) {
            val.grade = 'C'
        }
        else if (val.marks < 60 && val.marks >= 40) {
            val.grade = 'D'
        }
        else if (val.marks < 40) {
            val.grade = 'F'
        }
    })
    return data
}
var data = [{ name: 'chathan', marks: 80 }, { name: 'sarath', marks: 90 }, { name: 'peetu', marks: 70 }, { name: 'raju', marks: 40 }, { name: 'tarun', marks: 30 }]
console.log(gradeStudents(data))
