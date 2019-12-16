var arr=[3,5,7,3,9,11,3,'p','q','r','q']         // given array
var val='q'                               // given value
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

console.log(indexOccurance(arr,val))        // function calling