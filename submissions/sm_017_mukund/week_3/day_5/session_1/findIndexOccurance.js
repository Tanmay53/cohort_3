var arr=[2,7,6,2,2,'e','w','q','e']         // given array
var val='e'                                 // given value
var index=[]                                // empty array to store the index occurance of given value

// function to find the index occurance of given value

function indexOccurance(arr,value){
    cnt=arr.length
    for(i=0;i<arr.length;i++){
        if( arr[i] === value ){
            index.push(i)
            
        }
        
        cnt--

        if( (cnt==0) && index==0){
            return -1;
        }
    }

    return index;
}

console.log(indexOccurance(arr,val))        // function call