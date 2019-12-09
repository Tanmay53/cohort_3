function avgMarks(student)
{
    count=0
    sum=0
       for(var i=0;i<student.marks.length;i++)
       {
        sum=sum+student.marks[i];
        count=count+1;
       }
       var avgg=sum/count
       return avgg

    
}
var student = {
    name:'Aditya',
    marks: [50,100,150,200],
 }
console.log("Avg of the marks is:",avgMarks(student))
