function intersectArrays(input1,input2){
    var sub = []
    var ans
    for(i =0; i< input1.length;i++){
        for(j =0;j<input2.length;j++)
        if(input1[i] ==  input2[j])
        sub.push(input2[j]) 
    }
    console.log(sub)
}
intersectArrays([10,12,15,18,0,5],[19,0,5])