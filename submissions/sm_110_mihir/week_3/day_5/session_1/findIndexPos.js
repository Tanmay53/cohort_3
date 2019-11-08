function indexPos(arr,value){
    for(i=0;i<arr.length;i++){
        if (arr[i]==value)
            return i
    }
    return -1
}

var score=[1,20,100,30,40,5,6,1]
console.log(indexPos(score,100))