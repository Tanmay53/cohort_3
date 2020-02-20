function union_array(input)
{
    input=input.split("\n")
    var str=input[0]+" "+input[1]
    str=str.split(" ")
    len2=str.length
    var new1=''
    var count
    for(var i=0;i< len2;i++)
    {
        count=0
        for(var j=0;j<=i;j++)
        {
            if(str[i]==str[j])
            {
                count++
            }
        }  
        if(count==1 && i !=0)
        {
            new1=new1+" "+str[i]
        }
        else if(count ==1 && i == 0)   {
             new1=str[i]

        }
    }
    console.log(new1)
}
union_array("1 2 3 3\n4 2 5")