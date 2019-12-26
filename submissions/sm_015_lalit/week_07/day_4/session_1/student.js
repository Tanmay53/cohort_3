class Student {
    constructor(name, email, phone) {
        this.name = name || "invalid"
        this.email = email || "invalid"
        this.phone = phone || "invalid"
        this.marks = []
    }
    assigMarks(maths, eng, sci) {
        this.marks.push(Number(maths))
        this.marks.push(Number(eng))
        this.marks.push(Number(sci))
    }
    highestMarks() {
        let maxMarks = this.marks.reduce(function (a, b) {
            if (a < b) {
                a = b
            }

        })
        return maxMarks
    }

    totalSubjects() {
        let totalSubject = this.marks.reduce(function (a, b) {
            a++, 0
        })
        return totalSubject
    }

    showMarks() {
        let showMark = console.log(this.marks)
    }

    average() {
        let marksSum = this.marks.reduce(function (a, b) {
            a += b, 0
        })
        let averageMark = marksSum / this.totalSubjects()
        return averageMark
    }

    low() {
        let lowMark = this.marks.reduce(function (a, b) {
            if (a > b) {
                a = b
            }
        })
        return lowMark
    }
}