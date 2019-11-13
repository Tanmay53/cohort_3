function intersectArrays(input1,input2){
    var sub = []
    var concat=[]
    var diff=[]
    for(i =0; i< input1.length;i++){
        for(j =0;j<input2.length;j++)
        if(input1[i] ==  input2[j])
        sub.push(input2[j]) 
    }
     for(i=0;i<input1.length;i++){
         concat.push(input1[i])
     }
     for(j=0;j<input2.length;j++){
        concat.push(input2[j])
    }
    for(j=0;j<sub.length;j++){
        for(i=0; i<concat.length;i++){
            if(sub[j]==concat[i]){
                concat[i] = null
            }
        }
    }
    for(i=0;i<concat.length;i++){
        if(concat[i] != null)
            diff.push(concat[i])
    }
    console.log(diff)

}
intersectArrays([10,12,15,18,0,5],[19,0,5])