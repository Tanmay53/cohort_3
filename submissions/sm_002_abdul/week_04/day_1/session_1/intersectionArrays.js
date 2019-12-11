arr1=[1,2,3,4,1,1];
arr2=[3,1,5,4,6,7,7];

function intersec(arr1,arr2){
    firstObj={};
    secondObj={};
    for (var i=0;i<arr1.length;i++){
        firstObj[arr1[i]]=arr1[i];
    }
    for (var j=0;j<arr2.length;j++){
        secondObj[arr2[j]]=arr2[j];
    }
    var intersectionArray=[]
    for (key in firstObj){
        for (key2 in secondObj){
            if (firstObj[key]===secondObj[key2]){
                intersectionArray.push(firstObj[key]);
            }
        }
    }
    return intersectionArray;
}

console.log(intersec(arr1,arr2));