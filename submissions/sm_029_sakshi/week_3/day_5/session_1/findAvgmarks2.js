function avgMarks(student)
{
    return student.func()
}



var student = {
    name:'Sakshi',
    marks: [50,100,150,200],
    func: function(){
    count=0
    sum=0
       for(var i=0;i<this.marks.length;i++)
       {
        sum=sum+this.marks[i];
        count=count+1;
       }
       return sum/count
    }
   
}
console.log(avgMarks(student))
