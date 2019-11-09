student = {
    name:'Raj',
    marks: [50,30,100,80]
}

function averageMarks(student){
   sum=0;
    for(i=0;i<student.marks.length;i++){
        sum = sum + student.marks[i];
    }
    var averageMarks= sum / student.marks.length;
    return averageMarks;

}

console.log(averageMarks(student));