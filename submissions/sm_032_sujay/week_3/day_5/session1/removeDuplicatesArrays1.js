var arr=['2','3','2','4','5']


function rmDuplicates(array)
{
    var copy = []
    var newarr= []
    for(i=0;i<array.length-1;i++)
    {
        for(j=i+1;j<= array.length-1;j++)
        {
            if(array[i] == array[j])
            {
                copy.push(array[i])
               }
                                 
        }
       
    }
    console.log(copy)
}rmDuplicates(arr)