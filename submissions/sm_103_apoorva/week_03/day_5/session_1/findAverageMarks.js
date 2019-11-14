var student= {
    name: 'Apoorva',
    marks: [50,30,100,80]
}

function averageMarks(student)
{
    var sum=0
    for(i=0;i<student.marks.length;i++)
    {
        sum+= student.marks[i]
    }
    console.log("Average mark of "+ student.name +" is --  " + sum/(student.marks.length))
}
averageMarks(student)