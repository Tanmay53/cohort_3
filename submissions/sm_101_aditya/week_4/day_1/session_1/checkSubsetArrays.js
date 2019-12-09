var arr1 = [1, 2, 3, 4, 5, 9]
var arr2 = [7]
var x = false
for(i=0; i<arr1.length; i++){
    for(j = 0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            x = true
        }
    }
}
if(x){
    console.log(true)
}
else{
    console.log(false)
}