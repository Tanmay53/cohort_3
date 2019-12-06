function avgMarks(student){

    var totalMarks=0
    for (var i=0;i<student["marks"].length;i++){
        totalMarks+=student["marks"][i];
    }

    return totalMarks/student["marks"].length
}

student={
    name:"barney",
    marks:[45,100,55,55,45]
}

console.log(avgMarks(student))