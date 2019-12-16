var arr=[3,4,6,8,3,12,3,'x','y','z','x',6]
var val=6

function countDuplicates(arr,value){
    var obj={ };
    for(i=0;i<arr.length;i++){

        obj[arr[i]]=0
    }
    for(i=0;i<arr.length;i++){

        obj[arr[i]]+=1
    }

    z=obj[value]
        return (z);
}


console.log(countDuplicates(arr,val))