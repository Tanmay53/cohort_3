function indexOccur(arr,value){
    index = []
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == value){
            index.push(i)
        }
        // else{
        //     return -1
        // }
    }
    if(index.length==0)
        return -1
    return index
}


var arr = [3,1,4,5,4,4,7]
console.log(indexOccur (arr, 2))

