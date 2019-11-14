// An object of name student is created
student = {
    name:'Piyush',
    marks: [50,30,100,80]
}
//function to find average
function average(Object)
{
  var sum=0
  var avg=0
  for(i=0;i<Object.marks.length;i++)
    {
      sum+=Object.marks[i]
    }
  console.log(sum)
  console.log(avg=sum/Object.marks.length)
  
}
//function call
average(student)