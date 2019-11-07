function sumEven(arr){
    var sums=0
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sums=sums+Number(arr[i])
        }
    }
    console.log(sums)
}

sumEven(['1','2','3','4','5','6','7'])