var student = {
    name:'yashwanth',
    marks: [50,30,100,80]
}
var sum = 0
function avg(num){
for(i=0;i<student.marks.length;i++){
    sum += student.marks[i]
}
console.log(sum/num)
}
avg(student.marks.length)