var arr={
    students: ["Apoorva","Raj","Rahul","Vishal","Kushal","Raj","Vishal"]
}

function removeDuplicateArrays(arr)
{
    var res=[]
    for(i=0;i<arr.students.length;i++)
    {
        for(j=i+1;j<arr.students.length;j++)
        {
            if(arr.students[i]==arr.students[j])
                arr.students[j]=null
        }
    }
    for(i=0;i<arr.students.length;i++)
    {
        if(arr.students[i]!=null)
            res[i]=arr.students[i]
    }
    console.log(res)
}
removeDuplicateArrays(arr)
