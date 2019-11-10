function diffArrays(input1,input2){
    var sub = []
    var diff =[]
    for(i =0; i< input1.length;i++){
        for(j =0;j<input2.length;j++)
        if(input1[i] ==  input2[j])
        sub.push(input2[j]) 
    }
    for(i =0 ;i < sub.length;i++){
        for(j=0;j<input1.length;j++){
            if(sub[i]== input1[j])
                input1[j] = null
            
        }
    }       
    
    for(i=0;i<input1.length;i++){
        if(input1[i] != null)
            diff.push(input1[i])
    }   
    console.log(diff)  
}
diffArrays([10,12,15,18,0,5,],[10,0,5])