function join_array(arr,string)
{
    str =""
    for(i=0;i<arr.length;i++)
    {
        str=str+arr[i]+" "
    }

    console.log(str+ string)
}
join_array(["Happy","Birthday","King"],"Kohli")