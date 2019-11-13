var arr=[1,2,3,4,2,6]
//function definition
function IndexOf(num,arr)
{ var arr2=[]
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==num)
        {
            arr2.push(i)
        }
    }
    console.log(arr2)
}
//function call
IndexOf(2,arr);