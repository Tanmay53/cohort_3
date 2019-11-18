function findAverageMarksobj(student){
var sum=0
var count=0
for (i=0;i<student["marks"].length;i++){
    sum=sum+student["marks"][i]
    count++
    }
console.log(sum/count)
}


student = {
    name:'<name>',
    marks: [50,30,100,80]
}
findAverageMarksobj(student)