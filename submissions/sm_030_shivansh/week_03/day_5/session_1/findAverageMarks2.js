// function which accepts an object as argument and calculates the average of the marks of a student\
function findAverageMarks(student) {

    return student.average();

}

var student1 = {
    name: "Shivansh Singh",
    marks: [88, 89, 87, 85, 86],
    sum: 0,
    average: function () {
        for (var i = 0; i < this.marks.length; i++) {
            this.sum += this.marks[i];
        }
        return this.sum / this.marks.length;
    },

}


console.log(findAverageMarks(student1));
