function checkSub(input1,input2){
    var sub=[]
    var count = 0
    for(i =0; i< input1.length;i++){
        for(j =0;j<input2.length;j++)
        if(input1.includes (input2[j]))
            count += 1       
    }
    if(count == 0){
        console.log("Not Superset")
    }
    else
        console.log(" Superset")
}
checkSub([10,12,15,18,0,5],[19,0,5])