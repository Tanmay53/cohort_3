function removeDuplicate(arr2)
{
    var new_arr=[]
    for(var i = 0; i < arr2.length; i++)
     {
        if (new_arr.indexOf(arr2[i]) == -1) 
        {
            new_arr.push(arr2[i])
        }
    }
    return new_arr
}
console.log(removeDuplicate([1,2,3,4,5,4,5,6,4,4,5,3,8,7,8,9]))