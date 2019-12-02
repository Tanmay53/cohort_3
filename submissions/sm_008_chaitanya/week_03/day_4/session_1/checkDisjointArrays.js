var arr1=[1,2,3,4,5]
var arr2=[6,8,9,7,4]
function disjointArrays(arr1,arr2){
var count=0;
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]== arr2[j]){
            count=count+1;
        }
    }
}
    if(count==0){
    console.log('Two given arrays are Disjoint')
    }
    else{
    console.log('Two given arrays are Not Disjoint')
    }
}
disjointArrays(arr1,arr2)

