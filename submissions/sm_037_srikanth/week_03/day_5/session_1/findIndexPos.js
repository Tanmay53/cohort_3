var array=[1,2,3,4,5,2,4,5];
var element=5;
function position(arr,element){
    for(var i=0;i < arr.length; i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
    
}
console.log(position(array,element));