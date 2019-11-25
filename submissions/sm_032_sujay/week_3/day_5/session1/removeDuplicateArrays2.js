counter={
    array:['1','1','2','2','a','b','a'],
}

function delDup(obj)
{
    var copy = []
    var newarr= []
    for(i=0;i<obj.array.length-1;i++)
    {
        for(j=i+1;j<=obj.array.length-1;j++)
        {
            if(obj.array[i] == obj.array[j])
            {
                // copy.push(obj.array[i])
                delete obj.array[i]
              }
                      
        }
       
    }
    console.log(obj.array[i])
}delDup(counter)