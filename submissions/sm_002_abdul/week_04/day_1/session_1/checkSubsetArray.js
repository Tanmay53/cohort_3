arr1=[1,2,3,1,1,5];
arr2=[1,2,3,5,6,7,8];

function subset(arr1,arr2){
    var first={};
    var second={};
    size1=arr1.length;
    size2=arr2.length;
    for (var i=0;i<size1;i++){
        first[arr1[i]]=arr1[i];
    }
    for (var j=0;j<size2;j++){
        second[arr2[j]]=arr2[j];
    }
    
    var a=Object.values(first);
    var b=Object.values(second);

    for (var i=0;i<a.length;i++){
        if (b.indexOf(a[i])===-1){
            return false;
        }

    }
    return true;
    
}

console.log(subset(arr1,arr2));