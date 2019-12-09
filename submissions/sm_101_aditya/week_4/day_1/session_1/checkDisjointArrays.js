var arr1 = [1, 2, 3]
var arr2 = [4, 5, 9]
var x = false
for(i=0; i<arr1.length; i++){
    for(j = 0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            x = true
        }
    }
}
if(x){
    console.log(false)
}
else{
    console.log(true)
}