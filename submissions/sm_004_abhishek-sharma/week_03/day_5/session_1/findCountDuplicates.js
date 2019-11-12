function countDuplicates(arr, target) {
    var duplicate = {
        given : arr,
        flag : target,
        occurance : function(){
            var count = 0
            for(var i = 0; i < duplicate.given.length; i++){
                if(duplicate.given[i] == duplicate.flag){
                    count++
                }
            }
            return count
        }
    }
    return duplicate.occurance()
}

console.log(countDuplicates([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99], 1))
