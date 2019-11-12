function intersectionArrays(arr_1,arr_2)
{   
    var a=[]
    for(i=0;i<arr_1.length;i++)
        {
            for(j=0;j<arr_2.length;j++)
            {
                if(arr_1[i] == arr_2[j])
                {
                    a.push(arr_1[i])
                }
                
            }
        }
    console.log(a)
    
}
intersectionArrays([2,5,7,9,1,4,3],[1,2,3,5])
