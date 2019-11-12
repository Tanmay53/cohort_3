// student object
student = {
    name:'Piyush',
    marks: [50,30,100,80],
    average: function(){
    var sum=0
    var avg=0
    for(i=0;i<this.marks.length;i++)
    {
      sum+=this.marks[i]
    }
    console.log("Sum is ",sum)
    console.log("average is ",sum/this.marks.length)
   }
    }
// function to call the object function    
function avgmarks()
{
student.average();  
}
//function call
avgmarks();
