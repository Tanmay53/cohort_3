student = {
    name:'teja',
    marks: [50,30,100,80]
}
function average (){
var sum = 0
var avg = 0
for ( i = 0 ; i < student.marks.length ; i++) 
{
    var sum  = sum + student.marks[i];  // adding array elements
}
var avg = sum / student.marks.length
console.log("The average of marks :",avg)
}
average(student)