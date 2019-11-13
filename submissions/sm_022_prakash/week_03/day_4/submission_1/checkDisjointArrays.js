var arr1 = [1,2,3,4];
var arr2 = [5,6,7];
var output = true
function disjointArrays(arr1, arr2){
for (i=0;i<arr1.length;i++){
    for (j=0;j<arr2.length;j++){
        if (arr1[i] == arr2[j]) {
            output = false
            break;
        }
        else {
            (arr1[i]!==arr2[j])
            output = true
            break;
        
    }
    // console.log(count, diff)
}
}
if(output==false){
    console.log("This is not a  disjoint array")
}
else{
    console.log("This is disjoint array")
}
return;
}
disjointArrays([1,2,3,4],[5,6,7,8])
