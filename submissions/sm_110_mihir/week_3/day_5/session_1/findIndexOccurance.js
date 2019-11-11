function allIndexes(arr,value){
    var positions=[-1],index=0
    for(i=0;i<arr.length;i++){
        if (arr[i]==value)
            positions[index++]=i
    }
    return positions
}

var score=[1,20,1,100,30,40,5,1,6,1]
console.log(allIndexes(score,1))