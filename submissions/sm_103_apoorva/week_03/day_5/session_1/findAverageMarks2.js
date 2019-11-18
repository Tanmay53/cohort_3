var student= {
    name: 'Apoorva',
    marks: [50,30,100,80],
    average: function()
    {   
    function avg(student) {
        var sum=0
        for(i=0;i<student.marks.length;i++)
        {
            sum+= student.marks[i]
        }
        
        return sum/student.marks.length
    }
    console.log("Average mark of "+ student.name +" is --  " + avg(student))
    }
}
student.average()
