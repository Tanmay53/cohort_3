function Symmetric(arr1, arr2) {
    for (var i =0;i<=arr1.length-1;i++) 
    {
        for (var j=0;j<= arr2.length-1;j++) 
        {
            if (arr1[i] ==arr2[j]) 
            {
                arr1.splice(i, 1)
                arr2.splice(j, 1)
            }
        }
    }
    for (var i = 0; i < arr2.length; i++)
    {
        arr1.push(arr2[i]);
         console.log(arr1);
         return arr1;
    }
}

Symmetric([1,2,3,4,5],[2,3,4,5,6])
