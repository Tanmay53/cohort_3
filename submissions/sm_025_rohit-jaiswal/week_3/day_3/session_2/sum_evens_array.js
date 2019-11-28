var arr = [ 2,42,57,69,72 ]
var sum = 0
for(var i=0; i<arr.length; i++){
    if(arr[i]%2==0){
    sum += arr[i]
}
}
console.log(sum)