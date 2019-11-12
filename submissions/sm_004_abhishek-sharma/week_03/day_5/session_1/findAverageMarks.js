function Average(student) {
    var sum = 0
    for(var i = 0; i < student.marks.length; i++){
        sum += student.marks[i]
    }
    return sum
}

var student = {
    name : "Abhishek",
    marks : [95, 93, 98, 75, 85],
}

var result = console.log(Average(student))