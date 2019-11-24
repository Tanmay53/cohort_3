function gradeStudents(obj) {
    if (obj.marks >= 90) {
        obj.grade = 'A'
    }
    else if (obj.marks < 90 && obj.marks >= 80) {
        obj[grade] = 'B'
    }
    else if (obj.marks < 80 && obj.marks >= 60) {
        obj.grade = 'C'
    }
    else if (obj.marks < 60 && obj.marks >= 40) {
        obj.grade = 'D'
    }
    else if (obj.marks < 40) {
        obj.grade = 'F'
    }
    console.log(obj)
}

students = [{ name: 'Albert', marks: 70 },
{ name: 'Pogo', marks: 91 }]

gradeStudents(students[0])
gradeStudents(students[1])