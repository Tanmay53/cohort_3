arr1=[1,2,3,4,1,1,5,6];
arr2=[1,2,3,2,2,5];

function superset(arr1,arr2){
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

    for (var i=0;i<b.length;i++){
        if (a.indexOf(b[i])===-1){
            return false;
        }
    }
    return true;  
}
console.log(superset(arr1,arr2));