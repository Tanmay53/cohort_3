var arr=[2,4,8,2,5,2,'a','d','a',8]
var val=2

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