arr1=[1,2,3,1,1,4,5,6];
arr2=[7,8,9,8,8,10,12];

function disjoint(arr1,arr2){
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

    for (items of a){
        for (values of b){
            if (items===values){
                return false;
            }
        }
    } 
    return true;
}
console.log(disjoint(arr1,arr2));