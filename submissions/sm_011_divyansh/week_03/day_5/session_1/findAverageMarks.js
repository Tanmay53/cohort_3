
function avg(studentData)
 {
    var total = 0;
    for(var i = 0; i < studentData.marks.length; i++) 
    {
        total+=studentData.marks[i];
    }
    avg = total/ studentData.marks.length;
    console.log("average is " + avg);
}
avg({name:'divyansh',marks: [50,60,70,80,90,100]})
