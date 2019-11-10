function unionCheck(arr1,arr2)
{
    var all = []
    var union = []
        for(i=0;i<arr1.length;i++)
        {
        all.push(arr1[i])
        }
        for(j=0;j<arr2.length;j++)
        {
        all.push(arr2[j])
        }
    console.log("Prashu : ",all)
    //all.pop(all[6])
    //console.log("Prashu 2 : ",all)
    for(i=0;i<all.length-1;i++)
    {
        for(j=i+1;j<all.length;j++){
            if(all[i] == all[j])
            {
                all.splice(j,1)
            }
        }
    }
    console.log("Final output: ",all)
}
unionCheck([6,1,3,5,6,7],[2,3,4,8,9,5])