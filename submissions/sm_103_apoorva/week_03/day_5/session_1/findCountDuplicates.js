var arr={
    students: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"]
}

function removeDuplicateArrays(arr,studentName)
{
    var count=0
    for(i=0;i<arr.students.length;i++)
    {
            if(arr.students[i]== studentName)
               count++ 
    }
    console.log(count)
}
removeDuplicateArrays(arr,"Vishal")