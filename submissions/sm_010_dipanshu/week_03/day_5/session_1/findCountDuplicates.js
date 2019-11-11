function countDuplicates(array,target){
    if(array.length == 0){
        return ('Please enter a valid array')
    }
    else{
        count = 0

        for(var i=0;i<array.length;i++){
            if(target === array[i]){
                count++
            }
        }
        if(count != 0){
            return (count-1+' duplicates found')
        }
        else{
            return ('No duplicates found')
        }
    }
}

sample = {
    array : [1,2,3,2,4,1,2,3,4,5,1,2,4,5,3],
    target : 1,
    countDupl : function(){
        console.log(countDuplicates(this.array, this.target))
    }
}

sample.countDupl()