function remvDupl(array){

    if(array.length == 0){
        console.log('Please enter a valid array')
    }
    else{
        var unique = []
        unique.push(array[0])
    
        var notPresent = true
    
        for(var i=1;i<array.length;i++){
            for(var j=0;j<unique.length;j++){
                if(array[i] === unique[j]){
                    notPresent = false
                }
            }
            if(notPresent){
                unique.push(array[i])  
            }
            notPresent = true
        }
        console.log(unique)
    }
}

remvDupl([1,2,1,3,2,4,1])
remvDupl([1,1,1,1,1,1,1,1,2])
remvDupl([])