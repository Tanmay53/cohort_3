class Student {
    constructor(name = 'invalid', email = 'invalid', phone = 'invalid') {
        this.name = name
        this.email = email
        this.phone = phone
    }

    assignMarks(objmarks) {
        this.marks = objmarks
    }

    highestMarks() {
        let marks = Object.values(this.marks) 
        let max = marks[0]
        for(let i = 0; i < marks.length; i++) {
            if(marks[i] > max)
                max = marks[i]
        }

        return max
    }

    totalSubjects() {
        return Object.keys(this.marks).length
    }

    showMarks() {
        return Object.values(this.marks)
    }

    average() {
        let sum = 0
        let count = 0
        let marks = Object.values(this.marks)
        for(let i = 0; i < marks.length; i++) {
            sum = sum + marks[i]
            count++
        }

        return sum / count
    }

    low() {
        let marks = Object.values(this.marks)
        let min = marks[0]

        for(let i = 0; i < marks.length; i++) {
            if(marks[i] < min) {
                min = marks[i]
            }
        }

        return min
    }
 
}

// test
stu = new Student()
stu.assignMarks({'eng' : 10, 'math' : 20, 'hindi' : 50})
console.log(stu.highestMarks())
console.log(stu.totalSubjects())
console.log(stu.showMarks())
console.log(stu.average())
console.log(stu.low())