function checkDisjointArrays(arr_1,arr_2)
{   count=0
    for(i=0;i< arr_1.length;i++) {
        for(j=0;j<arr_2.length;j++)
                {
                    if(arr_1[i] != arr_2[j])
                    count++ 
                    else
                        count=0
                }
        
    }
    if(count==(arr_1.length * arr_2.length))
        console.log("disjoint array")
    else
        console.log("not a disjoint array")
}
checkDisjointArrays([1,2,3,6],[5,7,4,6,9])

    

