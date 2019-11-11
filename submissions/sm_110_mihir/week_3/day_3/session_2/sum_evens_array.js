function sum_even_array(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    return sum
}

arrNum=[2,4,3,5,7,8]
console.log(sum_even_array(arrNum))