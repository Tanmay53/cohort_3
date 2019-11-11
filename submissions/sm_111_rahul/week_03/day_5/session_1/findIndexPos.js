function findIndexPos(value, arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == value){
            return i;
        }else{
            counter++;
        }
        if(counter == arr.length){
            return -1;
        }
    
        
    }
}
counter = 0;
value =  7;
arr = [2, 4 , 'rahul', 'sharma', 6]
console.log(findIndexPos(value, arr))