function checkSuperset(arr1, arr2) 
{
    var counter= 0;
    for (var i = 0; i < arr1.length; i++)
     {
        for (var j = 0; j < arr2.length; j++) 
        {
            if (arr1[i] == arr2[j])
                counter++
        }
    }
    if(counter==(arr2.length)) 
    {
        console.log("superset");
    }
     else
    {
        console.log("not superset");
    }
}


checkSuperset(['1', '8', '7', '6', '9', '10', '11', '12', '13'], ['6', '7', '8', '9', '10'])
