function checkSub(set1,subset){
    var sub=[]
    var count = 0
    for(i =0; i< set1.length;i++){
        for(j =0;j<subset.length;j++)
        if(subset.includes (set1[j]))
            count += 1       
    }
    if(count == 0){
        console.log("Not Subset")
    }
    else
        console.log(" Subset")
}
checkSub([10,12,15,18,0,5],[19,0,5])