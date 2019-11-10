var array=[1,2,3,4,5,5,3,2,5,5];
var element=5;
var count=0;
function numberOfDuplicates(arr,element){
    for(var i=0;i < arr.length; i++){
        if(arr[i] == element){
            count = count + 1;
        }
        
    }

    if(count > 0){
        return count;
    }
    else{
        return 0;
    }
}
console.log(numberOfDuplicates(array,element));
