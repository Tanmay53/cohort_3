var studentProfile = {
    name: 'student1',
    marks: [45, 46, 47, 48, 49]

}

function averageMarks(studentProfile) {
    var marks = studentProfile.marks //access marks key in object and store it in var
    sum = 0
    len = marks.length
    //average function
    for (var i = 0; i < len; i++) {
        sum += marks[i]
    }
    return average = sum / len

}
console.log(averageMarks(studentProfile))