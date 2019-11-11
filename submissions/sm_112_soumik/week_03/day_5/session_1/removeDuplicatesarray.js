function removeDup(input){
    var store= []
    // console.log(input.length)
    for(i =0;i<input.length -1;i++){
        for(j=i+1;j<input.length;j++){
            if(input[i] == input[j]){
                input[j] = null
            }
        }
    }
    // console.log(input) 
    for(i=0;i<input.length ;i++){
        if(input[i] != null){
            store.push(input[i])
            }
    }

    
    console.log(store)
}
removeDup([1,2,3,4,5,4,5,6])