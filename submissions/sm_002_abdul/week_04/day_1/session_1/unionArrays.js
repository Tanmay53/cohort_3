arr1=[1,2,1,1,3,4,5];
arr2=[4,5,7,8,9];

function union(arr1,arr2){
    var obj={};
    var size1=arr1.length;
    var size2=arr2.length;

    for (var i=0;i<size1||i<size2;i++){
        if (i<size1){
            obj[arr1[i]]=arr1[i];
        }
        if (i<size2){
            obj[arr2[i]]=arr2[i];
        }
    }
    return Object.values(obj);
}

console.log(union(arr1,arr2))

