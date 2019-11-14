arr1 =[5,6,5,4,3,6,7,8]

var x = arr1.map(function(ele,index,arr1){
    if(arr1[index -1] > ele )
    return -1
    else
    return 1

})
console.log(x)