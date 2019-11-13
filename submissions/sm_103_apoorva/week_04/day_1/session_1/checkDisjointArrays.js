
function checkDisjointArrays(arr_1,arr_2)
{   count=0 
    arr_1.forEach(function(element)
    {
        arr_2.forEach(function(items)
        {
            if(element != items)
                count++ 
            else
                count=0
        })
    })
    if(count==(arr_1.length * arr_2.length))
        console.log("True")
    else
        console.log("False")
}
checkDisjointArrays([1,2,3,6],[5,7,4,0,9])

    

