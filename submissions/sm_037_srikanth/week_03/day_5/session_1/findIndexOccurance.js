var array=[1,2,3,4,5,5,3,2];
var element=5;
var positions=[];
function findPosition(arr,element){
    for(var i=0;i < arr.length; i++){
        if(arr[i] == element){
            positions.push(i);
        }
        
    }

    if(positions.length > 0){
        return positions;
    }
    else{
        return -1;
    }
}
console.log(findPosition(array,element));
