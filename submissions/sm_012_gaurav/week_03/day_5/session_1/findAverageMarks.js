function findAverageMarks(object) {
    //Case when marks array is empty.
    if (object.marks.length === 0) {
        return "Marks array is empty."
    }
    var average = 0;  //Variable to hold average marks.
    for (var i = 0; i < object.marks.length; i++) {
        average += object.marks[i];
    }

    average /= object.marks.length;
    return average;
}

student = {
    name:'John',
    marks: [80,200,300,70,120]
}
console.log(findAverageMarks(student));