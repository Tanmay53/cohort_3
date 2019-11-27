var arr1 = [1,2,3,4,5]
var arr2 = [1,2,2,3,4,5,6,6,7,7,8]
var arr = []
var opt = []
var cnt = 0
function intersectionArray(arr1, arr2){
for(var i = 0 ; i<arr1.length; i++){
    for(var j = 0; j<arr2.length; j++){
        if(arr1[i]==arr2[j]){
           arr.push(arr1[i]) 
        }
    }
}
for(var i=0; i<arr.length;i++ ){
    for(var j=0; j < opt.length;j++){
        if(arr[i] == opt[j]){
            cnt = 1;
            break;
        }
    }
    if(cnt == 0){
        opt.push(arr[i])
    }
    cnt = 0; 
}
console.log(opt)
return(opt)
}
// console.log(opt)

intersectionArray(arr1, arr2)