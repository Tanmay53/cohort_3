var student = [{ name: 'blessy', marks: "87" },
{ name: 'jilu', marks: "90" },
{ name: "sakshi", marks: "40" },
{ name: "mariya", marks: "60" },
{ name: "john", marks: "67" }]
function gradeStudents(student) {
    newArr = student.map(function (obj) {
        if (obj.marks >= 90) {
            (obj.grade = "A")
        }
        else if (obj.marks <= 90 && obj.marks > 80)

            (obj.grade = "B")

        else if (obj.marks <= 80 && obj.marks > 60)

            (obj.grade = "C")
        else if (obj.marks <= 60 && obj.marks > 40)

            (obj.grade = "D")

        else if (obj.marks <= 40)

            (obj.grade = "F")

        return obj
    })
    return newArr
}
console.log(gradeStudents(student))