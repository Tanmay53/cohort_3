student = {
    name:'name',
    marks: [50,30,100,80],
    average: function ()
    // write code here
    {
        sum=0
        avg=0
    for(var i=1;i<= this.marks.length-1;i++)
    {
    sum+= this.marks[i]
    avg= sum/i

    }
    console.log(avg)
    
}

}
        
       

function avgMarks(obj){
      
    student.average()
}avgMarks(student)
