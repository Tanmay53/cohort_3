function remvDupl(obj){
    return obj.removeDuplicates()
}

sample = {
    searchArray : [1,2,1,3,2,4,1],
    removeDuplicates: function(){

        if(this.searchArray.length == 0){
            return ('Please enter a valid array')
        }
        else{
            var unique = []
            unique.push(this.searchArray[0])
    
            var notPresent = true
    
            for(var i=1;i<this.searchArray.length;i++){
                for(var j=0;j<unique.length;j++){
                    if(this.searchArray[i] === unique[j]){
                        notPresent = false
                    }
                }
                if(notPresent){
                    unique.push(this.searchArray[i])  
                }
                notPresent = true
            }
    
            return unique
        }
    }
}

console.log(remvDupl(sample))