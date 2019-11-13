// function which accepts an object as argument and calculates the average of the marks of a student\
function findAverageMarks(student) {
    var sum = 0;
    for (var i = 0; i < student.marks.length; i++) {
        sum += student.marks[i];
    }

    return sum / student.marks.length;
}

var student1 = {
    name: "Shivansh Singh",
    marks: [98, 99, 97, 95, 96],
}
var student2 = {
    name: "Siddharth Singh",
    marks: [88, 89, 87, 85, 86],
}

console.log(findAverageMarks(student1));
console.log(findAverageMarks(student2));