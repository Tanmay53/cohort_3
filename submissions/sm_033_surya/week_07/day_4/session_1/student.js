class Student {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    assignMarks(english, maths, science, history) {
        this.english = english;
        this.maths = maths
        this.science = science
        this.history = history
    }
    showMarks() {
        var arra = []
        arra.push(this.english)
        arra.push(this.maths)
        arra.push(this.science)
        arra.push(this.history)
        return arra
    }
    highestMarks(marks) {
        marks.sort((a, b) => a - b)
        return marks[marks.length - 1]
    }
    low(marks) {
        marks.sort((a, b) => a - b)
        return marks[0]
    }
    average(marks) {
        var sum = marks.reduce(function (a, b) {
            return a + b
        })
        var avg = sum / marks.length
        return avg
    }
}
var student = new Student("surya", "teja@gmail.com", 9999999)
student.assignMarks(20, 20, 30, 40)
var marks = student.showMarks()
console.log(marks)
console.log(student.highestMarks(marks))
console.log(student.low(marks))
console.log(student.average(marks))
console.log(student)