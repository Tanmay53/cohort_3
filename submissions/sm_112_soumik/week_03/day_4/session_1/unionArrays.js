// arr1=[10,20,30]
// arr2=[40,50,60]
// for(i=0;i<arr2.length;i++){
    // arr1.push(arr2[i])
// }
// console.log(arr1)
function unionCheck(input1,input2){
var uni = []
var store = []
    for(i=0;i<input1.length;i++){
    uni.push(input1[i])
    }
    for(j=0;j<input2.length;j++){
    uni.push(input2[j])
}
for(i=0;i<input1.length;i++){
    for(j=0;j<input2.length;j++){
        if(input1[i] == input2[j])
        store.push(input2[j])
    }
}
for(i=0;i<store.length;i++){
    uni.pop(store[i])
}
console.log(uni)

}
unionCheck([4,5,6,7,8,9,1,2,3],[2,1,3,7,8,9,4,5])
