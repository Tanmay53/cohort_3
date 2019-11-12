function avgMarks(student) {
    return student.average()
}

var student = {
    name : "Abhishek",
    marks : [95, 93, 98, 75, 85],
    average : function() {
        var sum = 0
        for(var i = 0; i < this.marks.length; i++){
            sum += student.marks[i]
        }
        return sum  
    }
}
console.log(avgMarks(student))