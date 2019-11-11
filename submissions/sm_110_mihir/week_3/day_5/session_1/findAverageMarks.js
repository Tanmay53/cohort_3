// Q) FSD.JS.5.5
// function to calculate avg of marks in object
// function argument is object
function avgMarks(student){
    var sum=0
    for(var i=0;i<student.marks.length;i++){
        sum+=student.marks[i]
    }    
    return sum/student.marks.length
}

var student= {
    name: 'Mihir Kumar',
    marks: [50,40,50,40]
}

console.log(avgMarks(student))