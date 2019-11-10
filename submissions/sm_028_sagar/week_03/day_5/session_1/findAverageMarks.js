var student = {
    name: 'sagar', //input
    marks: [50, 30, 100, 80]
}

//Invoking function
console.log("Average marks of ", student.name, " is: ", findAverage(student))


//function for Average calculation
function findAverage(student) {
    var sum = 0;

    for (var i = 0; i < student.marks.length; i++) {
        sum = sum + student.marks[i];
    }

    return sum / (student.marks.length); //average
}