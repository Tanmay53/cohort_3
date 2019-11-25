student = {
    name:'<name>',
    marks: [50,30,100,80]
}



function calcAvg(obj)
{
    var sum=0
    var avg=0
    // for (key in obj)
    // {
    //     console.log(obj[key])
    // }'
    for(var i=1;i<= obj.marks.length-1;i++)
    {
    sum+= obj.marks[i]
    avg= sum/i

    }
    console.log(avg)
    

}
calcAvg(student)