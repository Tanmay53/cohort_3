function findIndex(array,target){

    notPresent = true

    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(target === array[j]){
                notPresent = false
                return j
            }
        }
        
        notPresent = true
    }
    if(notPresent){
        return 0
    }
}

index = findIndex([1,2,3,2,4,1,5,1,9,4,9,5],5)

if(index != 0){
    console.log('Element found at index: '+index+', position: '+(index+1))
}
else{
    console.log('Element not present in the aray')
}