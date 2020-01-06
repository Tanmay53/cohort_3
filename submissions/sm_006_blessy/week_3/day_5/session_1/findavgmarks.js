 var student = {
    name:'blessy',
    marks:[50,30,100,80]
}

function findavgmarks(student)
{
    var sum=0;
    count=0;
    var avg
    for(var i=0; i<student.marks[i]; i++)
    {
         sum =sum+student.marks[i]
         count=count+1
          avg=sum/count;
    }
    return avg
}
console.log(findavgmarks(student))