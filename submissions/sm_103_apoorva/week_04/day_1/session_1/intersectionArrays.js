function intersectionArrays(arr_1,arr_2)
{   
    var a=[]
    arr_1.forEach(function(element)
        {
            arr_2.forEach(function(items)
            {
                if(element == items)
                {
                    a.push(element)
                }
                
            })
        })
    console.log(a)
    
}
intersectionArrays([2,5,7,9,1,4,3],[1,2,3,5,6])
