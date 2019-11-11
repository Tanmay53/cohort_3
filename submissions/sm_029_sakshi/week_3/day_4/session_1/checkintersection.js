function intersectCheck(arr1,arr2)
{
    var all = []
    var inter=[]
    var union = []
        for(i=0;i<arr1.length;i++)
        {
        all.push(arr1[i])
        }
        for(j=0;j<arr2.length;j++)
        {
        all.push(arr2[j])
        }
    console.log("Sakshi : ",all)
    //all.pop(all[6])
    //console.log("Sakshi 2 : ",all)
    for(i=0;i<all.length-1;i++)
    {
        for(j=i+1;j<all.length;j++){
            if(all[i] == all[j])
            {
                inter.push(all[j])
                
            }
        }
    }
    console.log("Final output: ",inter)
}
intersectCheck([6,1,3,5,6,7],[3,4,8,9,5])