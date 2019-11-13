function findAverageMarks(obj)
{
    var sum = 0 , avg
    for(var i=0 ; i<obj.marks.length ; i++)
    {
        sum = sum + obj.marks[i]

    }
    avg = sum/(obj.marks.length)
    return avg
}

var student ={
    name : 'APS',
    marks : [50,30,100,80]
};

console.log('Average marks of student is :', findAverageMarks(student))